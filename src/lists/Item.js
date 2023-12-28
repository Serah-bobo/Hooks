import { useState } from "react"
//initial list

const initialItems=[
    {id:1, name:'Apple'},
    {id:2, name:'Orange'},
    {id:3, name:'Banana'},
    {id:4, name:'Kiwi Fruit'},
]
const Item = () => {
    const [items, setItems]=useState(initialItems);
    const [newItemName, setNewItemName] = useState('');

    const addItem = () => {
        //trim used to chcek for trailing spaces
      if (newItemName.trim() !== '') {
        const newItem = { id: items.length + 1, name: newItemName };
        setItems([...items, newItem]);
        setNewItemName(''); // Clear the input after adding the item
      }
    };
  
    const removeItem = id => {
      const updatedItems = items.filter(item => item.id !== id);
      setItems(updatedItems);
    };
  
    const handleInputChange = event => {
      setNewItemName(event.target.value);
    };
  
    return (
        <div className="container mx-auto max-w-md mt-8 p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">List of Fruits</h2>
          <ul>
            {items.map(item => (
              <li key={item.id} className="mb-2 border-b py-2 flex justify-between items-center">
                <span>{item.name}</span>
                <button
                  onClick={() => removeItem(item.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Remove 
                </button>
              </li>
            ))}
            
          </ul>
          <div className="mt-4 flex">
            <input
              type="text"
              value={newItemName}
              onChange={handleInputChange}
              placeholder="add a new fruit"
              className="border rounded-md px-2 py-1 w-full mr-2"
            />
            <button
              onClick={addItem}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add a fruit
            </button>
          </div>
        </div>
      );
    
}

export default Item
