import React from 'react'


class DataInput extends React.Component {
  render() {
    return <div style={{marginTop:'40px'}}>

      <iframe
        title="map"
        id="theFrame"
        src="http://127.0.0.1:5000/"
        frameBorder="0"
        style={{
          width: '800px',
          height : '400px',
        }}
      >
      </iframe>


    </div>
  }
}

export default DataInput
