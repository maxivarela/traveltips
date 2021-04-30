import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'
import { editTip, getTip } from './api'
import { EscFunctionToCancel } from '../components/shared/SharedComponents';

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
    const id = router.query.id
    const [fetchedData, setFetchedData] = useState({})
    const [data, setData] = useState({})

    // get the data to prefill the form.
    useEffect(() => {
        const getData = async () => {
            const data = await getTip(id)
            setFetchedData(data)
        }
        getData()
    }, [])

    function Form(props) {
        const { register, handleSubmit, errors, reset, control } = useForm({
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

        EscFunctionToCancel()

        return (

            <form noValidate autoComplete="off" onSubmit={handleSubmit(data => setData(data))}>
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
        )
    }

    return (
        <Container component="main" maxWidth="xs" style={{ margin: '40px auto' }}>
            <Form />
        </Container>
    );
}


const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(2, 0, 0),
    },
}));