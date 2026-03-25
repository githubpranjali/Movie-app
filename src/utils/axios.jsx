import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers:{
         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YmM4ZjIxMjY1MWQ1ZWUyZDJjZTk3NjM4MWQwMjkwMyIsIm5iZiI6MTc3MDI2MDMyOS44NSwic3ViIjoiNjk4NDA3NjlkYTU1NTJmODNkNmVlOWQ3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.rplHHBrwb30nI_O6LoI6pn0aewPkMGDYQe8QrmbnOE0',
  accept: 'application/json'
    },
});

export default instance;