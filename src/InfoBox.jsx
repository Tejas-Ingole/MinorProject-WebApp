import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';

export default function InfoBox({info}){
    
    const INIT_URL= "https://plus.unsplash.com/premium_photo-1678066986924-120fdbdf3439?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1631315124498-41ebb8b10ede?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1508669599492-fd102379df98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const VERY_HOT="https://images.unsplash.com/photo-1641027131407-a559a5f73be0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className="InfoBox">
            <div className="CardContainer"> 
            <Card sx={{ maxWidth: 580 }}>
            <CardMedia
                sx={{ height: 250 }}
                image={info.humidity > 80 ? RAIN_URL
                    : info.temp < 20 
                    ? COLD_URL
                    : info.temp > 35 
                    ? VERY_HOT
                    : HOT_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} &nbsp;
                    {info.humidity > 80 ? <ThunderstormIcon/>
                    : info.temp < 20 
                    ? <AcUnitIcon/>
                    : info.temp > 35 
                    ? <WbSunnyTwoToneIcon/>
                    : <SunnyIcon/>}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} className="weather-details">
                    <p>Temperature: <b>{info.temp}°C</b></p>
                    <p>Humidity: <b>{info.humidity}%</b></p>
                    <p>Min Temp: <b>{info.tempMin}°C</b></p>
                    <p>Max Temp: <b>{info.tempMax}°C</b></p>
                    <p>The weather can describe as <i>{info.weather}</i> & feels like <b>{info.feelsLike}&deg;C</b></p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}