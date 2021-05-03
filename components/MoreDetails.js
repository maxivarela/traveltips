import SimpleMenu from './shared/SimpleMenu';
import Link from 'next/link'
import {useRouter} from 'next/router'
import {deleteTip} from '../lib/api'

import {
    Button,
    MenuItem,
    Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export const MoreDetails = ({ id, ...props }) => {
    const router = useRouter()

    const deleteHandler = async () => {
        window.confirm("Are you sure you wish to delete this tip?") &&
            await deleteTip(id).then(router.push('/'))
    }

    return (
        <SimpleMenu props={props}>
            <MenuItem onClick={props.handleClose} >
                <Button>
                    <Link href={{ pathname: "/edit", query: { id } }}>
                        <a>
                            <div className='flexRow'>
                                <EditIcon color='primary' />
                                <Typography variant='h5' color='primary' component='h6' style={{ marginLeft: 10 }}>
                                    Edit
                            </Typography>
                            </div>
                        </a>
                    </Link>
                </Button>
                
            </MenuItem>
            <MenuItem onClick={props.handleClose}>
                <Button onClick={(id) => deleteHandler(id)} className='flexRow'>
                    <DeleteIcon color='primary'/><Typography variant='h5' color='primary' component='h6' style={{marginLeft: 10}}>Delete</Typography>
                </Button>
            </MenuItem>
        </SimpleMenu>
    )
}