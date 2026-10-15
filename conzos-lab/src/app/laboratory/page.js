async function getData() {
  const res = await fetch("http://snowtooth-api-rest.fly.dev"); //fetching from snowtooth api
  return res.json(); //returns the data 
}

export default async function Page() {
  const data = await getData(); //awaiting the data
  return (
    <main>
      <h1>Equipment Status Info</h1>
      <table>
        <thead>
          <tr>
            <th>Machine Name</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lift) => ( //data is mapped to id, name, status properties
            <tr key={lift.id}>
              <td>{lift.name}</td>
              <td>{lift.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}