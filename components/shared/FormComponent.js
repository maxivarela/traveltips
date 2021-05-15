import {
    TextField,
} from '@material-ui/core/';

export default function FormComponent({ register, errors,}) {
    return (
        <>
            <TextField
                variant="outlined"
                margin="normal"
                // autoFocus
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
                id="tags"
                label="tags"
                name="tags"
                type="text"
                inputRef={register}
                error={!!errors.tags}
                helperText={errors?.tags?.message}
            />
        </>
    )
}