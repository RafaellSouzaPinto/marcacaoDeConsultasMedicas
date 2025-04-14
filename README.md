# 🏥 Sistema de Agendamento de Consultas Médicas

Aplicativo mobile construído com **React Native e Expo**, projetado para oferecer uma experiência simples e eficiente na marcação e gerenciamento de consultas médicas diretamente pelo celular.

---

## 👤 Desenvolvedor

**Rafael de Souza Pinto** – **RM: 555130**

---

## 📲 Funcionalidades

- 🗓️ **Agendar Consultas** – Escolha a data, o horário e a especialidade desejada.
- 📃 **Ver Consultas Agendadas** – Acompanhe facilmente os compromissos futuros.
- ❌ **Cancelar Agendamentos** – Exclua consultas de forma prática.
- 🕒 **Seleção de datas/hora com DateTimePicker**.
- 💾 **Persistência de dados com AsyncStorage** – Os dados ficam salvos no próprio aparelho.
- 💅 **Visual moderno com Styled-Components**.

---

## 👥 Perfis de Usuário

A aplicação contempla **três perfis diferentes**, com permissões específicas:

### 👤 Paciente
- Pode marcar, visualizar e cancelar suas consultas.

### 🩺 Médico
- Consulta sua agenda de atendimentos.
- Pode atualizar o status das consultas (em desenvolvimento).
- Acessa informações básicas dos pacientes.

### 🧑‍💼 Administrador
- Visualiza todas as consultas do sistema.
- Gerencia médicos e pacientes (adicionar, editar, excluir).
- Futuramente: acesso a relatórios e estatísticas do sistema.

---

## 🧰 Tecnologias Utilizadas

- **React Native 0.76.7**
- **Expo ~52.0.38**
- **React Navigation** (Bottom Tabs, Stack, Drawer)
- **@react-native-async-storage/async-storage**
- **styled-components**
- **react-native-elements**
- **@react-native-community/datetimepicker**
- **expo-linear-gradient**
- **expo-av** e **expo-haptics**

---

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-projeto.git

# Acesse o diretório
cd nome-do-projeto

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
