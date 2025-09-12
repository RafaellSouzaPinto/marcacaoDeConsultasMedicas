// src/screens/SettingsScreen/components/DataManagement.tsx
import React from "react";
import { Button } from "react-native-elements";
import { formatStorageSize } from "../models/appSettings";
import theme from "../../../styles/theme";
import {
  Section,
  SectionTitle,
  StorageInfo,
  StorageText,
  StorageHighlight,
  ButtonContainer,
} from "../styles";

interface DataManagementProps {
  storageInfo: any;
  onExportData: () => void;
  onImportData: () => void;
  onClearCache: () => void;
}

export const DataManagement: React.FC<DataManagementProps> = ({
  storageInfo,
  onExportData,
  onImportData,
  onClearCache,
}) => {
  return (
    <Section>
      <SectionTitle>Gerenciamento de Dados</SectionTitle>

      {storageInfo && (
        <StorageInfo>
          <StorageText>
            Consultas:{" "}
            <StorageHighlight>{storageInfo.appointments || 0}</StorageHighlight>
          </StorageText>
          <StorageText>
            Notificações:{" "}
            <StorageHighlight>
              {storageInfo.notifications || 0}
            </StorageHighlight>
          </StorageText>
          <StorageText>
            Espaço usado:{" "}
            <StorageHighlight>
              {formatStorageSize(storageInfo.totalSize || 0)}
            </StorageHighlight>
          </StorageText>
        </StorageInfo>
      )}

      <ButtonContainer>
        <Button
          title="Exportar dados"
          onPress={onExportData}
          buttonStyle={{
            backgroundColor: theme.colors.primary,
            paddingVertical: 10,
          }}
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button
          title="Importar dados"
          onPress={onImportData}
          buttonStyle={{
            backgroundColor: theme.colors.secondary,
            paddingVertical: 10,
          }}
        />
      </ButtonContainer>

      <ButtonContainer>
        <Button
          title="Limpar cache"
          onPress={onClearCache}
          buttonStyle={{
            backgroundColor: theme.colors.warning,
            paddingVertical: 10,
          }}
        />
      </ButtonContainer>
    </Section>
  );
};
