import Head from 'next/head'
import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form';
import PlacesAutocompleteEdit from '../components/PlacesAutocompleteEdit'
import { useRouter } from 'next/router'
import { editTip, getTip } from '../lib/api'
import { EscFunctionToCancel } from '../components/shared/SharedComponents';
import AuthCheck from '../components/AuthCheck'

import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Container,
    TextField,
    Typography,
} from '@material-ui/core/'

export default function Edit() {
    const classes = useStyles();
    const router = useRouter()
    const [data, setData] = useState({})
    const id = router.query.id
    const [fetchedData, setFetchedData] = useState({})
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    
    // get the data to prefill the form.
    useEffect(() => {
        const getData = async () => {
            const data = await getTip(id)
            setFetchedData(data)
        }
        getData()
    }, [])

    fetchedData && console.log('lisa', fetchedData)

    function Form() {
        const { register, handleSubmit, errors, reset } = useForm({
            defaultValues: {...fetchedData}
        })

        const addComplete = useCallback(() => {
            reset()
            router.back()
        }, [reset])

        useEffect(() => {
            data?.title &&
                editTip(data, id, addComplete)
        }, [setData, data, addComplete])

        const handleCancel = () => {
            router.back()
        };

        const submitData = (data) => {
            setData({ latitude, longitude, ...data })
        }

        EscFunctionToCancel()

        return (

            <form noValidate autoComplete="off" onSubmit={handleSubmit(submitData)}>
                <Typography className='formTitle'>
                    Edit Tip
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
                <PlacesAutocompleteEdit
                    register={register}
                    setLatitude={setLatitude}
                    setLongitude={setLongitude}
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
        )
    }

    return (
        <Container component="main" maxWidth="xs" style={{ margin: '40px auto' }}>
            <AuthCheck>
                <Head>
                    <title>Edit a Travel Tip</title>
                    <meta name='keywords' content='travel tips' />
                </Head>
                <Form />
            </AuthCheck>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(2, 0, 0),
    },
}));