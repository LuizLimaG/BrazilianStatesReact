function RegionScreen({ regionData }) {
    return (
      <div className="state-list">
        <h5>Região: {regionData.Região}</h5>
        <table>
          <thead>
            <tr>
              <th>Bandeira</th>
              <th>Estado</th>
              <th>Capital</th>
              <th>População</th>
            </tr>
          </thead>
          <tbody>
            {regionData.regiao.map((state, stateIndex) => (
              <tr key={stateIndex}>
                <td>
                  <img src={state.Bandeira} alt={`${state.Estado} Bandeira`} />
                </td>
                <td>{state.Estado}</td>
                <td>{state.Capital}</td>
                <td>{state.População}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default RegionScreen