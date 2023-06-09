import { Card, CardContent, CardHeader, Divider, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles'

type CardType = {
    children: React.ReactNode,
    title?: string,
    startIcon?: React.ReactNode,
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
    const theme = useTheme();
    return (
        <Card
            elevation={props.elevation ? props.elevation : 3}
            sx={{
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'transparent',
                margin: (props.margin ? props.margin : 3),
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                // padding: (props.padding ? props.padding : 3),
            }}
        >

            {props.title && (<>
                <CardHeader sx={headerSX} title={
                    <Typography variant='h6' fontWeight={'bold'} sx={{ display: "flex", alignItems: "center" }}>
                        {props.startIcon && (<Box display={'flex'} alignItems={'center'} marginRight={1}> {props.startIcon} </Box>)}
                        <Box display={'flex'} alignItems={'center'}>{props.title}</Box>
                    </Typography>} />
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