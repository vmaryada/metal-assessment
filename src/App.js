import logo from './images/Logo.png';
import people from './images/people.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from "@material-ui/core/CardActions";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './App.css';

const useStyles = makeStyles({
  card: {
width:400,
textAlign:'center',
  },
  media: {
    height: 200,
    width:350,
    margin:'auto',
    position:'relative',
    Top:-60
  },
});
function App() {
  const classes = useStyles();
  
  return (
    <>
    <div className="App" >
    <img src={logo} style={{position: 'absolute', left:30, top:20}}/>

    <Grid container style={{alignContent:'center', justifyContent:'center', height: '100vh'}}>
    <Grid item sm={3}>
    <Card  variant="outlined" className={classes.card}> 
    <CardActionArea>
    <CardMedia
        className={classes.media}
        image={people}
        title="People"
        alt=""
      />
      <CardContent>
        <Typography variant="h6">Question 1</Typography>
        <Typography variant="h5"  color="textSecondary" gutterBottom>
          What is the Symbol for EOS Blockchain
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'space-evenly'}}> 
        <Button  variant = "outlined" size="small" color="primary">
          Chestahedron
        </Button>
        <Button variant = "outlined"  size="small" color="primary">
          Chestahedron
        </Button>
        </CardActions >
        <CardActions style={{justifyContent:'space-evenly'}}>
        <Button  variant = "outlined" size="small" color="primary">
          Chestahedron
        </Button>
        <Button  variant = "outlined" size="small" color="primary">
          Chestahedron
        </Button>
      </CardActions>
      </Card>
    
      </Grid>
    </Grid>
    
      
    </div></>
  );
}

export default App;
