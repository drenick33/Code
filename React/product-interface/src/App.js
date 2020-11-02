import React, { useEffect, useState } from 'react';

import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [newName, setNewName] = useState('');
  const [editItem, setEditItem] = useState({});
  const [delItem, setDelItem] = useState({});
  //const [_id, set_ID] = useState('');
  useEffect(() => {
    getList();
  }, []); //watcher, stops infinite loop

  function getList() {
    axios({
      method: 'GET',
      url: 'http://localhost:6001/products',
    })
      .then((res) => {
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function post(e) {
    e.preventDefault();
    const post = {};
    if (name && price) {
      axios({
        method: 'POST',
        url: 'http://localhost:6001/products',
        data: {
          name,
          price,
        },
      })
        .then((res) => {
          getList();
          console.log(res.data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function remove(id) {
    console.log(id);
    axios({
      method: 'DELETE',
      url: 'http://localhost:6001/products/' + id,
      data: {
        _id: id,
      },
    })
      .then((res) => {
        getList();
        console.log(id);
        console.log('Deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function patch(id) {
    console.log(id);
    const load = [];
    if (newName) {
      load.push({
        propName: 'name',
        value: newName,
      });
    }
    if (newPrice) {
      load.push({
        propName: 'price',
        value: newPrice,
      });
    }
    axios({
      method: 'PATCH',
      url: 'http://localhost:6001/products/' + id,
      data: load,
    })
      .then((res) => {
        getList();
        console.log(id);
        console.log('Patched');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function edit(item) {
    setEditItem(item);
  }

  function updateName(e) {
    setEditItem({ ...editItem, name: e.target.value });
  }

  function editCancel() {
    setEditItem({});
  }

  function editSave() {
    axios({
      method: 'PATCH',
      url: 'http://localhost:6001/products/' + editItem._id,
      data: editItem,
    })
      .then((res) => {
        getList();
        console.log(editItem._id);
        console.log('Patched');
        setEditItem({});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function confirmDelete(item) {
    setDelItem(item);
  }

  function cancelDelete() {
    setDelItem({});
  }

  return (
    <div className="App">
      {products.map((el) => (
        <div key={el._id}>
          <ol>
            {delItem._id === el._id ? (
              <div>
                <button onClick={() => remove(el._id)}>Confirm</button>
                <button onClick={cancelDelete}>Cancel</button>
              </div>
            ) : null}
            {editItem._id === el._id ? (
              <div>
                <input onChange={updateName} value={editItem.name} />
                <button onClick={editSave}>Save</button>
                <button onClick={editCancel}>Cancel</button>
              </div>
            ) : (
              <span>
                {el.name}:{' $' + el.price}{' '}
                <button onClick={() => edit(el)}>Edit</button>
                <button onClick={() => confirmDelete(el)}>Delete</button>
              </span>
            )}
          </ol>
        </div>
      ))}
      <form>
        <input
          placeholder="New Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          placeholder="New Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button type="submit" onClick={post}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
