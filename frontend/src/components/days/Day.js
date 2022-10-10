function Day({hourlyTemperature}) {
  return (
    <div >
      <div className="card  mb-3">
       
        <div className="card-body ">
          <h5 className="card-title">{hourlyTemperature} ºC</h5>
        </div>
       
      </div>
    </div>
  );
}

export default Day;
