smart-grocery-frontend/src/App.js

// Smart Grocery Shopping List App - React (Frontend Only)

// Smart Grocery Shopping List App - React (Frontend Only) with Edit Functionality

import React, { useState } from 'react';

const App = () => {
  const [item, setItem] = useState('');
  const [category, setCategory] = useState('General');
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editCategory, setEditCategory] = useState('General');

  const addItem = () => {
    if (!item.trim()) return;
    setItems([...items, { name: item.trim(), category, id: Date.now() }]);
    setItem('');
    setCategory('General');
  };

  const deleteItem = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditName(item.name);
    setEditCategory(item.category);
  };

  const saveEdit = () => {
    setItems(items.map(item => (
      item.id === editingId ? { ...item, name: editName, category: editCategory } : item
    )));
    setEditingId(null);
    setEditName('');
    setEditCategory('General');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Smart Grocery List</h1>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <input
          type="text"
          placeholder="Enter item..."
          value={item}
          onChange={(e) => setItem(e.target.value)}
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
        >
          <option value="General">General</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
        </select>
        <button onClick={addItem} style={{ padding: '10px', width: '100%' }}>Add Item</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {items.map(({ id, name, category }) => (
          <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '6px' }}>
            {editingId === id ? (
              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  style={{ padding: '6px', width: '100%', marginBottom: '6px' }}
                />
                <select
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                  style={{ padding: '6px', width: '100%' }}
                >
                  <option value="General">General</option>
                  <option value="Fruits">Fruits</option>
                  <option value="Vegetables">Vegetables</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Bakery">Bakery</option>
                </select>
              </div>
            ) : (
              <div>
                <p style={{ fontWeight: '600' }}>{name}</p>
                <p style={{ fontSize: '14px', color: '#666' }}>{category}</p>
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginLeft: '10px' }}>
              {editingId === id ? (
                <button onClick={saveEdit} style={{ padding: '6px 10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '4px' }}>Save</button>
              ) : (
                <button onClick={() => startEdit({ id, name, category })} style={{ padding: '6px 10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px' }}>Edit</button>
              )}
              <button onClick={() => deleteItem(id)} style={{ padding: '6px 10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
