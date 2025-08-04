import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useRef, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useErrorHandler } from "../../../router/context/errorHandler";
import { UploadService } from "../../../services/uploadService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const UploadPage = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [uploadResult, setUploadResult] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { handleError } = useErrorHandler()
    const navigate = useNavigate();

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) setSelectedFile(file);
    };

    const handleUpload = async () => {
        
        if (!selectedFile) return;

        setUploading(true);
        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await UploadService.uploadFile(selectedFile);
            setUploadResult(`✅ ${response.recordsProcessed} registros procesados`);
            toast.success('Archivo subido con éxito');
            localStorage.setItem('lastFileId', response.fileId);
            navigate('/user/dashboard', { state: { fileId: response.fileId } });
        } catch (error) {
            handleError(error);
        } finally {
            setUploading(false);
        }
  };

    return (
    <Box sx={styles.container}>
        <Typography variant="h6" sx={styles.title}>Subir archivo de ventas</Typography>


        <Button
            variant="contained"
            component="label"
            startIcon={<CloudUploadIcon />}
            sx={{ backgroundColor: 'var(--primary-color)' }}
            
        >
            Seleccionar archivo
            <input
                ref={fileInputRef}
                type="file"
                hidden
                onChange={handleFileChange}
                accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
 
            />
        </Button>

        {selectedFile && (
            <Typography variant="body2" sx={styles.fileName}>
                Archivo seleccionado: {selectedFile.name}
            </Typography>
        )}

        <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            disabled={!selectedFile || uploading}
            sx={styles.uploadButton}
        >
            {uploading ? <CircularProgress size={24} color="primary" /> : <Typography>Archivo procesado correctamente</Typography>}
        </Button>
        
        {uploadResult && (
        <Typography variant="body2" sx={styles.result}>
          {uploadResult}
        </Typography>
      )}

    </Box>
   )
}

export default UploadPage


const styles = {
    container: {
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        backgroundColor: "var(--variant-bg-color)",
        height: "100vh",
    },
    button: {
        backgroundColor: "var(--primary-color)",
        color: "var(--primary-contrast-txt-color)",
        borderRadius: "var(--button-radius)",
        width: "var(--button-width-container)",
        height: "var(--button-height)",
        fontWeight: "var(--button-font-weight)",
        fontSize: "var(--button-font-size)",
    },
    title: {
        fontWeight: "bold",
        color: "var(--primary-color)",
    },
    fileName: {
        color: "var(--secondary-txt-color)",
    },
    uploadButton: {
        backgroundColor: "var(--accept-button-bg-color)",
        color: "var(--accept-button-txt-color)",
        width: "var(--button-width-container)",
        height: "var(--button-height)",
        fontWeight: "var(--button-font-weight)",
        fontSize: "var(--button-font-size)",
        borderRadius: "var(--button-radius)",
    },
    result: {
        color: "var(--success-color)",
    },
}