import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export function Footer(){
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          "카르페 디엠, 지금 이 순간을 기록하라!"
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          누구나 자신의 삶을 기록으로 남기고 싶어 한다. 막상 무엇을 써야할지 몰라 포기하는 경우가 비일비재하다. 
          우리의 삶을 포착하게 해주는 의미 있는 365개의 질문이 하루에 하나씩 제공된다. 
          "마지막으로 울었던 적은 언제인가?","토요일 오전을 보내는 나만의 가장 행복한 방법은?" 등 
          나 자신에 대해 생각하고 글을 쓰게 하는 빛나는 기회를 제공한다. 
          바쁜 일상 속 지혜로운 방법으로 우리를 깊이 생각하게 하고, 삶의 가장 빛나는 순간을 일깨워 준다.
        </Typography>
       
      </Box>
    )
}



 