import { NavNegro } from "./allNav";
import { Dashboard } from "./Dashboard";
import Container from "@material-ui/core/Container";
import { CarruselFotos } from "./home";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import { Box } from "@mui/material";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {Link, useNavigate} from 'react-router-dom'
export function ProxTorneos() {
  return (
    <div className="d-flex">
      <Dashboard />
      <div className="d-flex align-items-center justify-content-center">
        <CarruselFotos style={{ marginTop: "10px", marginBottom: "10px" }} />
        <div style={{ marginTop: "70px", marginLeft: "10px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <TarjetaPT />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <TarjetaPT />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <TarjetaPT />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <TarjetaPT />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <TarjetaPT />
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <TarjetaPT />
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <TarjetaPT />
            </Grid>{" "}
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <TarjetaPT />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export function Mistorneos() {
  return (
    <div className="d-flex" >
      <Dashboard />
      <Grid container spacing={2} style={{ marginTop: "70px", marginLeft: "10px" }}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <TarjetaMT />
        </Grid>
      </Grid>
    </div>
  );
}

function TarjetaPT() {
  return (
    <Card style={{ width: "200px", height: "300px" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>T1: Pokemon World</Card.Title>
        <Card.Text>Inscribete al torneo más grande de cartas Pokemon</Card.Text>
        <Button variant="primary">Inscribirse</Button>
        
      </Card.Body>
    </Card>
  );
}
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function TarjetaMT() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            T1: Pokemon World
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Descripcion del torneo
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        Desinscripción
        </Button>
        <Button size="small" color="primary" onClick={() => navigate('/admin/tablas')}>
        Ver resultados
        </Button>
      </CardActions>
    </Card>
  );
}
