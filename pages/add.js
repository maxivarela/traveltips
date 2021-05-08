import Head from 'next/head'
import { useState, useEffect, useCallback, useContext } from 'react'
import { useForm } from 'react-hook-form';
import PlacesAutocomplete from '../components/PlacesAutocomplete'
import { useRouter } from 'next/router'
import { addTip } from '../lib/api'
import {AuthContext} from '../lib/AuthContext'
import { EscFunctionToCancel } from '../components/shared/SharedComponents';
import AuthCheck from '../components/AuthCheck'

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
    const {currentUser} = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors }, reset, } = useForm()

    const addComplete = useCallback(() => {
        reset()
        router.back()
    }, [reset])

    useEffect(() => {
        data?.title &&
            addTip(data, currentUser, addComplete)
    }, [setData, data, addComplete])


    const handleCancel = () => {
        router.back()
    };

    EscFunctionToCancel()

    return (
        <>
            <Container component="main" maxWidth="xs" style={{ margin: '40px auto' }}>
                <AuthCheck>
                    <Head>
                        <title>Add a Travel Tip</title>
                        <meta name='keywords' content='travel tips' />
                    </Head>

                    <form noValidate autoComplete="off" onSubmit={handleSubmit(data => setData(data))}>
                        <Typography className='formTitle'>
                            Add Tip
                    </Typography>

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
                            required
                            multiline
                            rows={10}
                            id="image"
                            label="image/video"
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
                        <PlacesAutocomplete />
                        
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
                </AuthCheck>
            </Container>
        </>
    );
}

export default AddTip;

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(2, 0, 0),
    },
}));