import React from "react";
import {useState, useEffect} from "react";

function LocalStorage() {

    const [local, setLocal] = useState({});

  const handleOnchangeInput = (e) => {

        setLocal({
            ...local,
            [e.target.name]: e.target.value
        });
  };

  console.log(local);
  return (
    <div className="form row justify-content-center">
      <form className="col-6">
      <div className="mr-3">
          <label htmlFor="">Local key</label>
          <input
          name="key"
            onChange={e => handleOnchangeInput(e)}
            type="text"
            className="form-control"
            placeholder="Local storages"
          />
        </div>
        <div className="mr-3">
          <label htmlFor="">Local Value</label>
          <input
           name="value"
            onChange={e => handleOnchangeInput(e)}
            type="text"
            className="form-control"
            placeholder="Local storages"
          />
        </div>
        <div className="mr-3">
          <button className="btn btn-primary">Thêm local</button>
        </div>
      </form>
    </div>
  );
}

export default LocalStorage;
