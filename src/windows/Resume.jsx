import { Download } from 'lucide-react'
import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf';

import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>
                <a
                    href="/files/resume.pdf"
                    download
                    className='cursor-pointer'
                    aria-label='Download Resume PDF'
                    title='Download Resume'
                >
                    <Download className='icon' />
                </a>
            </div>
            <div className='max-h-[70vh] overflow-y-auto'>
                <Document file="/files/resume.pdf" className='pdf-viewer'>
                    <Page
                        pageNumber={1}
                        renderTextLayer
                        renderAnnotationLayer
                    />
                </Document>
            </div>
        </>
    )
}

const ResumeWindow = WindowWrapper({
    Component: Resume,
    windowKey: "resume",
})

export default ResumeWindow