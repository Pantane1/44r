const API_URL = window.location.origin + '/api/items';

// Fetch and display all items
async function fetchItems() {
    try {
        const response = await fetch(API_URL);
        const items = await response.json();
        displayItems(items);
        updateItemCount(items.length);
    } catch (error) {
        console.error('Error fetching items:', error);
        document.getElementById('itemsList').innerHTML = '<div class="empty">❌ Failed to load items</div>';
    }
}

// Display items in the DOM
function displayItems(items) {
    const container = document.getElementById('itemsList');
    
    if (items.length === 0) {
        container.innerHTML = '<div class="empty">✨ No items yet. Add your first item above!</div>';
        return;
    }
    
    container.innerHTML = items.map(item => `
        <div class="item" data-id="${item.id}">
            <span class="item-name">${escapeHtml(item.name)}</span>
            <button class="delete-btn" onclick="deleteItem(${item.id})">Delete</button>
        </div>
    `).join('');
}

// Add a new item
async function addItem() {
    const input = document.getElementById('itemInput');
    const name = input.value.trim();
    
    if (!name) {
        alert('Please enter an item name');
        return;
    }
    
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        
        if (response.ok) {
            input.value = '';
            fetchItems();
        }
    } catch (error) {
        console.error('Error adding item:', error);
        alert('Failed to add item');
    }
}

// Delete an item
async function deleteItem(id) {
    if (!confirm('Are you sure you want to delete this item?')) return;
    
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        
        if (response.ok) {
            fetchItems();
        }
    } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete item');
    }
}

// Update item count in stats
function updateItemCount(count) {
    document.getElementById('itemCount').textContent = count;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Event listeners
document.getElementById('addBtn').addEventListener('click', addItem);
document.getElementById('itemInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addItem();
});

// Load items on page load
fetchItems();
