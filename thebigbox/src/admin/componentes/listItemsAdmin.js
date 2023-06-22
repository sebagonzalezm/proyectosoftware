import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';

export const ListItemUser = (
  <div>
    <ListItem button component="a" href="/proxtorneos">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Próximos torneos" />
    </ListItem>
    <ListItem button component="a" href="/mistorneos">
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Mis torneos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Resultados" />
    </ListItem>
 
  </div>
);
export const ListItemAdmin = (
  <div>
    <ListItem button component="a" href="/admin/torneos">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Torneos" />
    </ListItem>
    <ListItem button component="a" href="/admin/subirtorneo">
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Publicar torneo" />
    </ListItem>
    <ListItem button component="a" href="/admin/upload">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Publicar foto/video" />
    </ListItem>
 
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>The Big Box</ListSubheader>
    <ListItem button component="a" href="https://www.instagram.com/tiendathebigbox/">
      <ListItemIcon>
       <InstagramIcon/>
      </ListItemIcon>
      <ListItemText primary="Instagram" />
    </ListItem>
    <ListItem button component="a" href="https://web.facebook.com/thebigboxcl">
      <ListItemIcon>
        <FacebookIcon/>
      </ListItemIcon>
      <ListItemText primary="Facebook" />
    </ListItem>
  </div>
);
