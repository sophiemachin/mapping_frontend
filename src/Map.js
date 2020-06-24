import React from 'react'


class DataInput extends React.Component {
  render() {
    return <div>

      <iframe
        title="map"
        id="theFrame"
        src="http://127.0.0.1:5000/template"
        frameBorder="0"
        style={{
          width: '100%',
          height : '800px',
        }}
      >
      </iframe>


    </div>
  }
}

export default DataInput
