import React from "react";
import PCR_Machine from "/src/assets/PCR_Machine.png";
import { getMaterials, addMaterial } from "../services/materialService";
import { useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";

function UseMachine({ running, toggle, status }) {
  if (running) {
    setTimeout(toggle, 3000);
    return <p hidden={!status}>PCR Running</p>;
  }
}

function MachineManager({ status, size }) {
  const [machineRunning, toggleRunning] = useReducer(
    (machineRunning) => !machineRunning,
    false,
  );
  useEffect(() => {
    console.log(`Machine running ${machineRunning}`);
  });
  return (
    <div>
      <img
        src={PCR_Machine}
        height={status ? 100 : 50} //The size of the PCR image depends on whether the user intends to access it
        width={status ? 100 : 50}
        alt="A PCR Machine"
        onClick={size}
      ></img>
      {!machineRunning && (
        <button hidden={!status} onClick={toggleRunning}>
          USE PCR MACHINE
        </button>
      )}
      <UseMachine
        running={machineRunning}
        toggle={toggleRunning}
        status={status}
      />
    </div>
  );
}

function MaterialStock() {
  const [materials, setMaterials] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const loadMaterials = async () => {
    try {
      const data = await getMaterials();
      setMaterials(data);
      setError("");
    } catch (err) {
      setError("Unable to load materials");
    }
  };

  useEffect(() => {
    fetch("/api/machines")
      .then((res) => res.json())
      .then((data) => console.log(data));

    loadMaterials();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const material = {
      name,
      quantity: Number(quantity),
    };

    try {
      const savedMaterial = await addMaterial(material);

      setMaterials((currentMaterials) => [...currentMaterials, savedMaterial]);

      setName("");
      setQuantity("");
      setError("");
    } catch (err) {
      setError("Unable to add material");
    }
  };

  return (
    <div>
      <h2>Lab Materials</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Material Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Material Quantity"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
          required
        />
        <button type="submit">Add Product</button>
      </form>

      {error && <p>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>Material Name</th>
            <th>Material Quantity</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material) => (
            <tr key={material.id}>
              <tr>{material.name}</tr>
              <tr>{material.quantity}</tr>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Laboratory() {
  const [status, toggleSize] = useReducer((status) => !status, false);
  var greeting = "Hello";
  useEffect(() => {
    console.log(`PCR Machine accessed : ${status}`);
  });
  return (
    <>
      <h1 id="greeting">{greeting}</h1>
      <h2>THIS IS THE LAB</h2>

      <MachineManager status={status} size={toggleSize} />

      <MaterialStock />
    </>
  );
}

export default Laboratory;
