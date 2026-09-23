import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import Chip from '@mui/material/Chip';

const Task = (props) => {

    return (
        <Grid
            key={props.id}
            size={{ xs: 12, sm: 6, md: 4 }}
        >
            <Card
                sx={{
                    backgroundColor: props.done ? 'lightgrey' : 'lightblue',
                    padding: '20px'
                }}
            >
                <CardHeader
                    title={props.title}
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '20px',
                        padding: '5px 20px',
                        textAlign: 'center'
                    }}
                />

                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'baseline',
                            mb: 2,
                            padding: '20px'
                        }}
                    >
                        <Typography
                            component="p"
                            variant="subtitle2"
                            color="text.primary"
                        >
                            Due: {props.deadline}
                        </Typography>
                    </Box>

                    <Typography
                        component="p"
                        variant="subtitle1"
                        align="center"
                        sx={{ fontStyle: 'italic' }}
                    >
                        {props.description}
                    </Typography>

                    <Chip
                        label={props.level}
                        color={
                            props.level == 'High' ? 'error' :
                                props.level == 'Medium' ? 'secondary' :
                                    'success'
                        }
                        sx={{
                            display: 'flex',
                            width: 'fit-content',
                            mx: 'auto'
                        }}
                    >
                    </Chip>
                </CardContent>



                <CardActions
                    sx={{
                        justifyContent: 'space-between',
                        padding: '20px'
                    }}
                >
                    <IconButton
                        aria-label="mark task as done"
                        color="default"
                        onClick={props.markDone}
                    >
                        <CheckIcon />
                    </IconButton>

                    <IconButton
                        aria-label="delete task"
                        color="default"
                        onClick={props.deleteTask}
                    >

                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>


    )
}

export default Task;
