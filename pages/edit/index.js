import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import firebase from '../../firebase'
// import { editTip } from '../api'
import { EscFunctionToCancel } from '../../components/shared/SharedComponents';

import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Container,
    TextField,
    Typography,
} from '@material-ui/core/'

export default function Edit () {
    const classes = useStyles();
    const router = useRouter()
    const id = router.query.id

    const [fetchedData, setFetchedData] = useState({})
    const [data, setData] = useState({})

    const { register, handleSubmit, reset,  formState: { errors } } = useForm({
        defaultValues: {
            username: 'nonoumasy',
            userImage: 'ADSFDS',
            title: 'title',
            description: 'lorem ipsum this and that',
        }
    })

    const addComplete = useCallback(() => {
        reset()
        router.back()
    }, [reset])

    useEffect(() => {
        const getData = async () => {
            const doc = await firebase
                .firestore()
                .collection('tips')
                .doc(id)
                .get()
            const data = await doc.data()
            setFetchedData(data)
        }
        getData()
    }, [])

    useEffect(() => {
        data?.title &&
            editTip(data, id, addComplete)
    }, [setData, data, addComplete])

    const onSubmit = (data) => {
        setData(data)
    }

    const handleCancel = () => {
        router.back()
    };

    EscFunctionToCancel()

    return (
        <Container component="main" maxWidth="xs" style={{ margin: '40px auto' }}>

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Typography className='formTitle'>
                    Edit Tip
                </Typography>

                <div>
                    <input
                        variant='outlined'
                        margin="normal"
                        fullWidth
                        label="username"
                        {...register("username")}
                    />
                </div>
                <div>
                    <input
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
                        required
                        fullWidth
                        id='title '
                        name='title'
                        label="title"
                        autoFocus
                        {...register("title", { required: true })}
                    />
                </div>
                <div>
                    <input
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

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(2, 0, 0),
    },
}));