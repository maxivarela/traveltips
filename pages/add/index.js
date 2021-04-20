import { useState, useEffect, useCallback} from 'react'
import { useForm } from 'react-hook-form';
// import * as yup from 'yup'
// import { yupResolver } from "@hookform/resolvers/yup"
// import GooglePlaces from '../../components/GooglePlaces'
import {useRouter} from 'next/router'
import { addTip } from '../api'

import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Container,
    TextField,
    Typography,
} from '@material-ui/core/';

const AddTip = () => {
    const classes = useStyles();
    const router = useRouter()
    const [data, setData] = useState({})
    // const [latitude, setLatitude] = useState(null)
    // const [longitude, setLongitude] = useState(null)

    const handleCancel = () => {
        router.back()
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const addComplete = useCallback(() => {
        reset()
        router.back()
    }, [reset])

    useEffect(() => {
        data?.title &&
            addTip(data, addComplete)
    }, [setData, data, addComplete])

    const onSubmit = (data) => {
        setData(data)
    }

    return ( 
        <Container component="main" maxWidth="xs">

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Typography className='formTitle'>
                    Add New Tip
                </Typography>

                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="username"
                        autoFocus
                        {...register("username")}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="userImage"
                        autoFocus
                        {...register("userImage")}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        required
                        fullWidth
                        label="title"
                        autoFocus
                        {...register("title", { required: true })}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        rows={10}
                        label="description"
                        autoFocus
                        {...register("description", { required: true })}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="image"
                        autoFocus
                        {...register("image")}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="audio"
                        autoFocus
                        {...register("audio")}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="link"
                        autoFocus
                        {...register("link")}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="location"
                        autoFocus
                        {...register("location")}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="tags"
                        autoFocus
                        {...register("tags")}
                    />
                </div>
                
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disableElevation
                    color="primary"
                    className={classes.submit}
                    >
                    Submit
                    </Button>

                <Button
                    fullWidth
                    onClick={handleCancel}
                    className={classes.submit}
                    >
                    Cancel
                </Button>
            </form>
        </Container>
    );
}

export default AddTip;

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(2, 0, 0),
    },
}));