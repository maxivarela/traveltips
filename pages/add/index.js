import Head from 'next/head'
import { useState, useEffect, useCallback, } from 'react'
import { useForm } from 'react-hook-form';
// import MUIRichTextEditor from 'mui-rte'
// import { convertToRaw } from "draft-js";

import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
// import GooglePlaces from '../../components/GooglePlaces'
import {useRouter} from 'next/router'
import { addTip } from '../api'
import { EscFunctionToCancel } from '../../components/shared/SharedComponents';

import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Container,
    InputAdornment,
    TextField,
    Typography,
} from '@material-ui/core/';

const schema = yup.object().shape({
    title: yup
        .string()
        .min(3)
        .max(80)
        .required('Title is a required field.'),
    // description: yup
    //     .string(),
    // image: yup
    //     .string(),
    // audio: yup
    //     .string(),
    // tags: yup
    //     .string(),
    // latitude: yup
    //     .number()
    //     .transform(cv => isNaN(cv) ? undefined : cv).positive()
    //     .lessThan(90)
    //     .moreThan(-90),
    // longitude: yup
    //     .number()
    //     .transform(cv => isNaN(cv) ? undefined : cv).positive()
    //     .lessThan(180)
    //     .moreThan(-180),
})

const AddTip = () => {
    const classes = useStyles();
    const router = useRouter()
    const [data, setData] = useState({})
    const [count, setCount] = useState(0)
    // const [latitude, setLatitude] = useState(null)
    // const [longitude, setLongitude] = useState(null)

    const handleCancel = () => {
        router.back()
    };

    const { register, handleSubmit, formState: { errors }, reset, } = useForm({
        resolver: yupResolver(schema)
    })

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

    EscFunctionToCancel()

    const { onChange, ...rest } = register("title", { required: true })

    return ( 
        <Container component="main" maxWidth="xs">
            <Head>
                <title>Add a Travel Tip</title>
                <meta name='keywords' content='travel tips' />
            </Head>

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
                        {...register("username")}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="userImage"
                        {...register("userImage")}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="city"
                        {...register("city")}
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
                        InputProps={{
                            maxLength: 80,
                            endAdornment: 
                            <InputAdornment position="end">
                                {count}/80
                            </InputAdornment>,
                            }}
                        onChange={e => setCount(e.target.value.length)}
                        {...rest}
                        // {...register("title", { required: true })}
                        error={!!errors.title}
                        helperText={errors?.title?.message}
                        />
                </div>
                <div>    
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        multiline
                        rows={10}
                        label="description"
                        {...register("description")}
                    />
                </div>

                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        multiline
                        rows={10}
                        label="image"
                        {...register("image")}
                    />
                </div>
                {/* <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="audio"
                        {...register("audio")}
                    />
                </div> */}
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="link"
                        {...register("link")}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="location"
                        {...register("location")}
                    />
                </div>
                <div>
                    <TextField
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="tags"
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