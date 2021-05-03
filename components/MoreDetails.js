import SimpleMenu from './shared/SimpleMenu';
import Link from 'next/link'

import {
    Button,
    MenuItem,
    Typography,
} from '@material-ui/core';

export const MoreDetails = ({ id, data, currentUser, ...props }) => {

    const deleteHandler = async () => {
        window.confirm("Are you sure you wish to delete this tip?") &&
            await deleteTip(id).then(router.push('/'))
    }

    return (
        data?.user === currentUser?.uid &&
        <SimpleMenu props={props}>
            <MenuItem onClick={props.handleClose}>
                <Button>
                    <Link
                        href={{ pathname: `../edit`, query: { id } }}
                    >
                        <Typography color='primary' style={{ fontSize: 12, }}>
                            Edit
                        </Typography>
                    </Link>
                </Button>
            </MenuItem>
            <MenuItem onClick={props.handleClose}>
                <Button onClick={(id) => deleteHandler(id)}>
                    <Typography color='primary' style={{ fontSize: 12, }}>
                        Delete
                    </Typography>
                </Button>
            </MenuItem>
        </SimpleMenu>
    )
}