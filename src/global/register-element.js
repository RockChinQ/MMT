import {
  Radio,
  TimePicker,
  DatePicker,
  Input,
  Progress,
  Button,
  Table,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Row,
  Col,
  TableColumn,
  Pagination,
  Dialog,
  Divider,
  Alert,
  Message,
  MessageBox,
  Tag,
  Form,
  FormItem,
  RadioGroup,
  TimeSelect,
  Checkbox,
  Popover,
  Image,
  Tabs,
  TabPane,
  InputNumber,
  PageHeader,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  MenuItem,
  Icon
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
const components = [
  DropdownItem,
  DropdownMenu,
  Dropdown,
  Avatar,
  PageHeader,
  Radio,
  TimePicker,
  DatePicker,
  Input,
  Progress,
  Button,
  Table,
  TableColumn,
  Container,
  Header,
  Main,
  Footer,
  Aside,
  Row,
  Col,
  TableColumn,
  Pagination,
  Dialog,
  Radio,
  Divider,
  Alert,
  Tag,
  Form,
  FormItem,
  RadioGroup,
  TimeSelect,
  Checkbox,
  Dialog,
  Popover,
  Input,
  Form,
  FormItem,
  Image,
  Input,
  FormItem,
  Tabs,
  TabPane,
  InputNumber,
  Menu,
  MenuItem,
  Divider,
  Dialog,
  Button,
  Form,
  FormItem,
  PageHeader,
  Avatar,
  Icon,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Tag
]
export default function (Vue) {
  for (const component of components) {
    Vue.use(component)
  }
  Vue.prototype.$msgbox = MessageBox
  Vue.prototype.$alert = MessageBox.alert
  Vue.prototype.$confirm = MessageBox.confirm
  Vue.prototype.$prompt = MessageBox.prompt
  Vue.prototype.$message = Message
}
