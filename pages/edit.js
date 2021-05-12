import { useState, useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form';
import PlacesAutocomplete from '../components/PlacesAutocomplete'
import { useRouter } from 'next/router'
import { editTip, getTip } from '../lib/api'
import { EscFunctionToCancel } from '../components/shared/SharedComponents';
import AuthCheck from '../components/AuthCheck'

import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Container,
    Typography,
} from '@material-ui/core/'
import FormComponent from '../components/shared/FormComponent';

export default function Edit() {
    const classes = useStyles();
    const router = useRouter()
    const [data, setData] = useState({})
    const id = router.query.id
    const [fetchedData, setFetchedData] = useState({})
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    // const { fetchedData, error} = useSWR(id, getTip);

    // get the data to prefill the form.
    useEffect(() => {
        const getData = async () => {
            const doc = await getTip(id)
            setFetchedData(doc.data())
        }
        getData()
    }, [])

    function Form() {
        const { register, handleSubmit, errors, reset } = useForm({
            defaultValues: {...fetchedData}
        })

        const addComplete = useCallback(() => {
            reset()
            router.back()
        }, [reset])

        useEffect(() => {
            data?.title && editTip(data, id, addComplete)
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
                <FormComponent register={register} errors={errors}/>
                <PlacesAutocomplete
                    register={register}
                    setLatitude={setLatitude}
                    setLongitude={setLongitude}
                    myLocation={fetchedData?.location}
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