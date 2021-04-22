import React from 'react'
import  Link from 'next/link'
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

import {
    Typography,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const FabButton = (
    // { id }
    ) => {

    return (
        <div style={{zIndex: 100}}>
            <Fab
                mainButtonStyles={{ backgroundColor: '#26978A', }}
                icon={<AddIcon />}
                alwaysShowTitle={false}
                >
                <Action text="Add Tip" style={{ backgroundColor: '#666', }}>
                    <Link href='/add'>
                        <Typography>
                            Tip
                        </Typography>
                    </Link>
                    
                </Action>
            
        
                <Action
                    text="Add Question"
                    style={{ backgroundColor: '#666', }}
                >
                    <QuestionAnswerIcon />
                </Action>
            </Fab>
        </div>
    )
}

export default FabButton
