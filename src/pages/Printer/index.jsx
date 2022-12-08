import { useEffect, useState } from "react";
import { Text } from "react-native";

export default function PrinterPage() {
  const [printers, setPrinters] = useState([]);
  const [currentPrinter, setCurrentPrinter] = useState();

  useEffect(() => {

  }, []);

  return (
    <Text>Desabilitada</Text>
  )
}