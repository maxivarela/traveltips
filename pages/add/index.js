import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import GooglePlaces from '../../components/GooglePlaces'
import {useRouter} from 'next/router'

import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Container,
    TextField,
    Typography,
} from '@material-ui/core/';

const schema = yup.object().shape({
    title: yup
        .string()
        .min(3)
        .required('Title is a required field.'),
    image: yup
        .string()
        .required('Cover Image is a required field.'),
    description: yup
        .string()
        .min(20)
        .required('description is a required field.'),
    startYear: yup
        .number()
        .required('startYear is a required field.'),
    endYear: yup
        .number(),
    audio: yup
        .string(),
    tags: yup
        .string(),
    latitude: yup
        .number()
        .transform(cv => isNaN(cv) ? undefined : cv).positive()
        .lessThan(90)
        .moreThan(-90),
    longitude: yup
        .number()
        .transform(cv => isNaN(cv) ? undefined : cv).positive()
        .lessThan(180)
        .moreThan(-180),
})

const AddTip = () => {
    const classes = useStyles();
    const router = useRouter()
    const [latitude, setLatitude] = React.useState(null)
    const [longitude, setLongitude] = React.useState(null)

    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = data => console.log(data);

    const handleCancel = () => {
        router.back()
    };

    // console.log(watch("example")); // watch input value by passing the name of it

    return ( 
        <Container component="main" maxWidth="xs">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography className='formTitle'>
                    Add New Tip
                </Typography>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="title"
                    label="title"
                    name="title"
                    type="text"
                    // inputRef={register}
                    // error={!!errors.title}
                    // helperText={errors?.title?.message}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    id="description"
                    label="description"
                    name="description"
                    type="text"
                    // inputRef={register}
                    // error={!!errors.description}
                    // helperText={errors?.description?.message}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="image"
                    label="image"
                    type="text"
                    id="image"
                    // inputRef={register}
                    // error={!!errors.image}
                    // helperText={errors?.image?.message}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="audio"
                    label="audio"
                    type="text"
                    id="audio"
                    // inputRef={register}
                    // error={!!errors.audio}
                    // helperText={errors?.audio?.message}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="tags"
                    label="tags"
                    name="tags"
                    type="text"
                    // inputRef={register}
                    // error={!!errors.tags}
                    // helperText={errors?.tags?.message}
                />
                <GooglePlaces 
                    setLatitude={setLatitude} 
                    setLongitude={setLongitude} 
                    // register={register} 
                    />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="latitude"
                    label="latitude"
                    type="number"
                    id="latitude"
                    value={latitude}
                    // inputRef={register}
                    // error={!!errors.latitude}
                    // helperText={errors?.latitude?.message}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="longitude"
                    label="longitude"
                    type="number"
                    id="longitude"
                    value={longitude}
                    // inputRef={register}
                    // error={!!errors.longitude}
                    // helperText={errors?.longitude?.message}
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