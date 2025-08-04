import {useState } from "react";
import { CircularProgress, Typography, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { toast } from "react-toastify";
import { DashboardService } from "../../../services/DashboardService";
import { useLocation } from "react-router";
import { useOnInit } from "../../../hooks/useOnInit";
import type { SalesDataDTO } from "../../../dto/dashboard/salesData";

const DashboardPage = () => {
  const location = useLocation();
  const fileIdFromState = location.state?.fileId;
  const fileId = fileIdFromState || localStorage.getItem('lastFileId');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SalesDataDTO[]>([]);

  useOnInit(() => {
    const fetchData = async () => {
      if (!fileId) {
        setLoading(false);
        return;
      }
      try {
        const result = await DashboardService.getSalesDataByFileId(fileId);
        setData(result);
      } catch (error) {
        toast.error("Error al cargar los datos del archivo");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  });

  if (loading) return <CircularProgress />;

  if (!fileId) {
    return (
      <Box sx={{ padding: "1rem" }}>
        <Typography variant="h5" gutterBottom>
          No se ha seleccionado ningún archivo.
        </Typography>
        <Typography variant="body1">
          Por favor, sube un archivo para ver los datos.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: "1rem" }}>
      <Typography variant="h5" gutterBottom>
        Datos del archivo: {fileId}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>Cantidad Vendida</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Promoción</TableCell>
              <TableCell>Categoría</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.sku}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>${row.price}</TableCell>
                <TableCell>{row.promotion ? "Sí" : "No"}</TableCell>
                <TableCell>{row.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DashboardPage;