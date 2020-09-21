import React, { useRef, useState } from "react";
import ButtonUi from './button'
function GantiPassword() {
  const [editPass, setPass] = useState({
    username: useRef(),
    password: useRef()
  });
  return (
    <div>
        <h1>GANTI PASSWORD</h1>
      <input
        type="text"
        ref={editPass.username}
        placeholder="Masukkan Nama baru"
        className="form-control mb-2"
      />
       <input
        type="text"
        ref={editPass.password}
        placeholder="Masukkan password baru"
        className="form-control mb-2"
      />
      <ButtonUi>Ganti Password</ButtonUi>
    </div>
  );
}

export default GantiPassword;
