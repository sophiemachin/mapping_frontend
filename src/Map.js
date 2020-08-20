import React from 'react'
import { withStyles } from '@material-ui/core'
import L from 'leaflet'

const useStyles = theme => ({
  root: {
    margin: theme.spacing(2),
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  map: {
    height: '400px',
    width: '600px',
    margin: '50px'
  }
})


class MapPres extends React.Component {

  componentDidMount() {
    this.map();
  }

  map() {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

  render() {
   const { classes }  = this.props;
   console.log(classes)

  return <div className={classes.root}>
    <div id="map" className={classes.map}/>
    </div>
  }
}

const Map = withStyles(useStyles)(MapPres)

export default Map
