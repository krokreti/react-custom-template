import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

type CardType = {
    children: React.ReactNode,
    title?: string,
    elevation?: number,
    margin?: number,
    padding?: number,
    footer?: boolean,
    footerChildren?: React.ReactNode,
    contentSX?: {},
    sx?: {},
}

// header style
const headerSX = {
    // p: 2.5,
    '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};

const MainCard: React.FC<CardType> = (props) => {
    return (
        <Card
            elevation={props.elevation ? props.elevation : 3}
            sx={{
                borderRadius: 2,
                border: '1px solid',
                borderColor: '#FFF',
                margin: (props.margin ? props.margin : 3),

                // padding: (props.padding ? props.padding : 3),
            }}
        >
            {props.title && (<>
                <CardHeader sx={headerSX} title={<Typography variant='h6' fontWeight={'bold'}>{props.title}</Typography>} />
                <Divider />
            </>
            )}

            <CardContent sx={props.contentSX}>
                {props.children}
            </CardContent>

        </Card>
    )
}

export default MainCard;