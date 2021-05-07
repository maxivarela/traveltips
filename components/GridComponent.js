import {CardComponent} from './CardComponent';

import {
    Grid,
} from '@material-ui/core';

export default function GridComponent ({ tips, locale, locales}) {

    return (
        <Grid container spacing={3}>
                {tips?.map(item => {
                    return (
                        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} xl={3}>
                            <CardComponent item={item} locale={locale} />
                        </Grid>
                    )
                })}

        </Grid>
    );
}