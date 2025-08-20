# 🏥 Sistema de Agendamento de Consultas Médicas

Aplicativo mobile construído com **React Native e Expo**, projetado para oferecer uma experiência completa e eficiente na marcação e gerenciamento de consultas médicas diretamente pelo celular. O sistema inclui funcionalidades avançadas como upload de fotos de perfil, notificações, estatísticas e um dashboard administrativo robusto.

---

## 👤 Desenvolvedor

**Rafael de Souza Pinto** – **RM: 555130**

---

## 📲 Funcionalidades Principais

### 🗓️ **Sistema de Agendamento**
- **Agendar Consultas** – Escolha a data, horário e especialidade desejada
- **Ver Consultas Agendadas** – Acompanhe facilmente os compromissos futuros
- **Cancelar Agendamentos** – Exclua consultas de forma prática
- **Editar Consultas** – Modifique detalhes de consultas existentes
- **Seleção Inteligente** – DateTimePicker para datas e horários

### 👤 **Gestão de Perfis**
- **Upload de Foto de Perfil** – Tire foto ou selecione da galeria
- **Edição de Perfil** – Atualize informações pessoais
- **Perfis Diferenciados** – Paciente, Médico e Administrador
- **Autenticação Segura** – Sistema de login e registro

### 📊 **Dashboard e Estatísticas**
- **Dashboard do Paciente** – Visão geral das consultas
- **Dashboard do Médico** – Agenda e pacientes atendidos
- **Dashboard Administrativo** – Controle total do sistema
- **Estatísticas em Tempo Real** – Métricas de consultas e usuários

### 🔔 **Sistema de Notificações**
- **Notificações Push** – Lembretes de consultas
- **Sino de Notificações** – Acesso rápido às mensagens
- **Histórico de Notificações** – Todas as mensagens recebidas

### 💾 **Persistência e Armazenamento**
- **AsyncStorage Local** – Dados salvos no dispositivo
- **Cache Inteligente** – Sistema de cache para melhor performance
- **Backup e Restore** – Funcionalidades de backup automático
- **Armazenamento de Imagens** – Fotos de perfil em base64 local

---

## 👥 Perfis de Usuário

A aplicação contempla **três perfis diferentes**, com permissões específicas:

### 👤 **Paciente**
- **Agendar Consultas** – Marque consultas com médicos disponíveis
- **Gerenciar Agenda** – Visualize, edite e cancele consultas
- **Perfil Personalizado** – Upload de foto e edição de dados
- **Dashboard Intuitivo** – Visão geral das consultas agendadas
- **Notificações** – Receba lembretes de consultas

### 🩺 **Médico**
- **Dashboard Médico** – Visualize agenda de atendimentos
- **Lista de Pacientes** – Acesse informações dos pacientes
- **Gerenciar Consultas** – Atualize status e detalhes
- **Perfil Profissional** – Mantenha dados e especialidade atualizados
- **Estatísticas** – Acompanhe métricas de atendimento

### 🧑‍💼 **Administrador**
- **Dashboard Administrativo** – Controle total do sistema
- **Gestão de Usuários** – Adicione, edite e remova médicos e pacientes
- **Monitoramento** – Visualize todas as consultas do sistema
- **Estatísticas Avançadas** – Métricas completas de uso
- **Backup e Restore** – Gerencie dados do sistema

---

## 🧰 Tecnologias Utilizadas

### **Core Technologies**
- **React Native 0.73.6** – Framework principal
- **Expo ~50.0.0** – Plataforma de desenvolvimento
- **TypeScript 5.9.2** – Tipagem estática

### **Navegação e UI**
- **React Navigation 6** – Bottom Tabs, Stack, Drawer
- **styled-components** – Estilização moderna
- **react-native-elements** – Componentes de interface

### **Armazenamento e Cache**
- **@react-native-async-storage/async-storage** – Persistência local
- **Sistema de Cache Inteligente** – Performance otimizada
- **Backup e Restore** – Gerenciamento de dados

### **Funcionalidades Avançadas**
- **expo-image-picker** – Upload de fotos de perfil
- **expo-linear-gradient** – Efeitos visuais
- **expo-av & expo-haptics** – Áudio e feedback tátil
- **@react-native-community/datetimepicker** – Seleção de datas

---

## 📦 Instalação e Configuração

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn
- Expo CLI instalado globalmente
- Dispositivo móvel ou emulador

### **Passos de Instalação**
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/marcacaoDeConsultasMedicas.git

# Acesse o diretório
cd marcacaoDeConsultasMedicas/MeuAppReactNative

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```

### **Configuração do Ambiente**
```bash
# Instalar Expo CLI globalmente (se necessário)
npm install -g @expo/cli

# Verificar se tudo está funcionando
npx expo doctor
```

### **Executando no Dispositivo**
- **Android**: Escaneie o QR Code com Expo Go
- **iOS**: Escaneie o QR Code com Camera app
- **Web**: Pressione 'w' no terminal

---

## 🚀 Funcionalidades Avançadas

### 📸 **Upload de Foto de Perfil**
- **Seleção de Imagens**: Galeria e câmera integradas
- **Armazenamento Local**: Base64 no AsyncStorage
- **Gerenciamento Inteligente**: Mantém apenas as 5 imagens mais recentes
- **Interface Intuitiva**: Botões para galeria e câmera
- **Validação Automática**: Verificação de URIs válidas
- **Integração com Auth**: Carrega imagens salvas ao fazer login

### 🔐 **Sistema de Autenticação**
- **Login Seguro**: Validação de credenciais
- **Registro de Usuários**: Criação de novos perfis
- **Context API**: Gerenciamento de estado global
- **Persistência**: Dados salvos localmente
- **Logout**: Encerramento seguro de sessão

### 📱 **Interface Responsiva**
- **Styled Components**: Estilização moderna e consistente
- **Tema Centralizado**: Cores e estilos padronizados
- **Navegação Intuitiva**: Stack, Tabs e Drawer navigation
- **Componentes Reutilizáveis**: Botões, inputs e cards padronizados

---

## 🏗️ Arquitetura do Projeto

### **Estrutura de Pastas**
```
src/
├── components/          # Componentes reutilizáveis
├── contexts/           # Contextos React (Auth, etc.)
├── navigation/         # Configuração de navegação
├── routes/            # Definição de rotas
├── screens/           # Telas da aplicação
├── services/          # Serviços (Auth, Storage, Images)
├── styles/            # Temas e estilos globais
└── types/             # Definições TypeScript
```

### **Principais Serviços**
- **AuthService**: Gerenciamento de autenticação
- **StorageService**: Persistência local com cache
- **ImageService**: Upload e gerenciamento de imagens
- **NotificationService**: Sistema de notificações
- **StatisticsService**: Métricas e estatísticas

---

## 🧪 Como Testar

### **1. Login como Paciente**
- Use credenciais de teste ou registre um novo usuário
- Teste o upload de foto de perfil
- Agende uma consulta

### **2. Login como Médico**
- Acesse o dashboard médico
- Visualize consultas agendadas
- Teste a edição de perfil

### **3. Login como Administrador**
- Acesse o dashboard administrativo
- Gerencie usuários
- Visualize estatísticas do sistema

---

## 🔧 Desenvolvimento

### **Comandos Úteis**
```bash
# Iniciar em modo de desenvolvimento
npx expo start

# Executar no Android
npx expo run:android

# Executar no iOS
npx expo run:ios

# Executar na web
npx expo start --web

# Verificar dependências
npx expo doctor
```

### **Estrutura de Commits**
- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação de código
- `refactor:` Refatoração

---

## 📝 Licença

Este projeto foi desenvolvido como parte do curso de **React Native** da **FIAP**.

---


