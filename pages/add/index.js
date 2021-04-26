import Head from 'next/head'
import { useState, useEffect, useCallback, } from 'react'
import { useForm } from 'react-hook-form';
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


const AddTip = () => {
    const classes = useStyles();
    const router = useRouter()
    const [data, setData] = useState({})
    const [count, setCount] = useState(0)
    // const [latitude, setLatitude] = useState(null)
    // const [longitude, setLongitude] = useState(null)

    const { register, handleSubmit, formState: { errors }, reset, } = useForm({
    })

    const addComplete = useCallback(() => {
        reset()
        router.back()
    }, [reset])

    useEffect(() => {
        data?.title &&
            addTip(data, addComplete)
    }, [setData, data, addComplete])


    const handleCancel = () => {
        router.back()
    };

    EscFunctionToCancel()


    return ( 
        <Container component="main" maxWidth="xs" style={{margin: '40px auto'}}>
            <Head>
                <title>Add a Travel Tip</title>
                <meta name='keywords' content='travel tips' />
            </Head>

            <form noValidate autoComplete="off" onSubmit={handleSubmit(data => setData(data))}>
                <Typography className='formTitle'>
                    Edit Tip
                </Typography>

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    type="text"
                    inputRef={register}
                    error={!!errors.username}
                    helperText={errors?.username?.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="userImage"
                    label="userImage"
                    name="userImage"
                    type="text"
                    inputRef={register}
                    error={!!errors.userImage}
                    helperText={errors?.userImage?.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="city"
                    label="city"
                    name="city"
                    type="text"
                    inputRef={register}
                    error={!!errors.city}
                    helperText={errors?.city?.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    id="title"
                    label="title"
                    name="title"
                    type="text"
                    inputRef={register}
                    error={!!errors.title}
                    helperText={errors?.title?.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    multiline
                    rows={10}
                    id="description"
                    label="description"
                    name="description"
                    type="text"
                    inputRef={register}
                    error={!!errors.description}
                    helperText={errors?.description?.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    multiline
                    rows={10}
                    id="image"
                    label="image"
                    name="image"
                    type="text"
                    inputRef={register}
                    error={!!errors.image}
                    helperText={errors?.image?.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"

                    fullWidth
                    id="link"
                    label="link"
                    name="link"
                    type="text"
                    inputRef={register}
                    error={!!errors.link}
                    helperText={errors?.link?.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"

                    fullWidth
                    id="location"
                    label="location"
                    name="location"
                    type="text"
                    inputRef={register}
                    error={!!errors.location}
                    helperText={errors?.location?.message}
                />
                <TextField
                    variant="outlined"
                    margin="normal"

                    fullWidth
                    id="tags"
                    label="tags"
                    name="tags"
                    type="text"
                    inputRef={register}
                    error={!!errors.tags}
                    helperText={errors?.tags?.message}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
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