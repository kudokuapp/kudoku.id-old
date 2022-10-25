import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CTO from '../images/CTO.png';

const data = {
    imgSrc: CTO,
    alt: 'Aldi Megantara CTO Kudoku',
    title: 'Founder (CTO)',
    name: 'Aldi Megantara Arifin',
};

function Calendar() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            if (cal !== undefined) cal('ui', { styles: { branding: { brandColor: '#345665' } } });
        })();
    }, []);
    return (
        <Cal
            calLink="aldi-megantara-arifin/30min"
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        />
    );
}

const BootstrapDialog = styled(Dialog)(() => ({
    '& .MuiDialogContent-root': {
        width: '100%',
        height: '100%',
    },
}));

const BootstrapDialogTitle = (props: { [x: string]: any; onClose: any }) => {
    const { onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 6,
                        top: 2,
                        color: '#2C5EA8',
                        zIndex: 100,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const Aldi = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <button
                className="bg-onPrimaryContainer/40 h-fit w-fit flex md:flex-col flex-row md:justify-between justify-center sm:px-8 sm:py-8 px-8 py-4 sm:rounded-[1.5rem] rounded-[1.0rem] items-center hover:bg-onPrimary hover:text-onPrimaryContainer text-onPrimary shadow-md animation-popup"
                onClick={handleOpen}
            >
                <div className="sm:w-fit sm:py-6 sm:px-11 w-16 pr-5 rounded-full min-w-min min-h-min">
                    <Image className="rounded-full" src={data.imgSrc} alt={data.alt} />
                </div>
                <div>
                    <h4 className="text-center sm:text-base text-sm font-bold md:mt-4 mt-0">
                        {data.title}
                    </h4>
                    <h4 className="text-center sm:text-base text-sm font-light mt-1">
                        {data.name}
                    </h4>
                </div>
            </button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby={`Cal.com ${data.name}`}
                open={open}
            >
                <BootstrapDialogTitle
                    id={`Cal.com ${data.name}`}
                    onClose={handleClose}
                    className="bg-[#FFFFFF]"
                ></BootstrapDialogTitle>
                <DialogContent sx={{ p: 0, m: 0 }} className="bg-[#FFFFFF] text-[#313131]">
                    <p className="m-4">
                        Want to know more about Kudoku? This is a 30-min 1:1 Google Meet interview
                        with me, Founder and CTO of Kudoku.
                    </p>
                    <Calendar />
                </DialogContent>
            </BootstrapDialog>
        </>
    );
};

export default Aldi;
