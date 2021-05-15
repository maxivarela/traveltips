import { useState, useEffect, useCallback, useContext } from 'react'
import { useForm } from 'react-hook-form';
import PlacesAutocomplete from '../components/PlacesAutocomplete'
import { useRouter } from 'next/router'
import { addTip } from '../lib/api'
import {AuthContext} from '../lib/AuthContext'
import { EscFunctionToCancel } from '../components/shared/SharedComponents';
import AuthCheck from '../components/AuthCheck'
import FormComponent from '../components/shared/FormComponent';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Container,
    Typography,
} from '@material-ui/core/';

const schema = yup.object().shape({
    title: yup
        .string()
        .required('Title is a required field.')
        .min(3),
})

const AddTip = () => {
    const classes = useStyles();
    const router = useRouter()
    const [data, setData] = useState({})
    const {currentUser} = useContext(AuthContext)
    const [latitude, setLatitude ] = useState(null)
    const [longitude, setLongitude ] = useState(null)

    const { register, handleSubmit, errors , reset, } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const addComplete = useCallback(() => {
        reset()
        router.back()
    }, [reset])

    useEffect(() => {
        data?.title && addTip(data, currentUser, addComplete)
    }, [setData, data, addComplete])

    const onSubmit = (data) => {
        console.log(data)
        return (
            setData({ latitude, longitude, ...data })
        )
    }

    const handleCancel = () => {
        router.back()
    };

    EscFunctionToCancel()

    return (
        <>
            <Container component="main" maxWidth="xs" style={{ margin: '40px auto' }}>
                <AuthCheck>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <Typography className='formTitle'>
                            Add Tip
                        </Typography>
                        <FormComponent 
                            register={register} 
                            errors={errors}/>
                        <PlacesAutocomplete
                            register={register}
                            setLatitude={setLatitude}
                            setLongitude={setLongitude}
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