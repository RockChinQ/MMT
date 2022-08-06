import {
  Radio,
  Menu,
  Select,
  MenuItem,
  TimePicker,
  DatePicker,
  Input,
  Progress,
  Button,
  Table,
  Container,
  Header,
  Aside,
  Main,
  Icon,
  Submenu,
  MenuItemGroup,
  Row,
  Col,
  TimeSelect,
  Checkbox,
  Dialog,
  Popover,
  MessageBox,
  Message,
  Form,
  FormItem,
  TableColumn,
  Option,
  Pagination,
  Divider,
  Alert,
  Tag,
  RadioGroup,
  Image,
  Tabs,
  TabPane,
  InputNumber,
  PageHeader,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
const components = [
  Select,
  Menu,
  MenuItem,
  Icon,
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
  Aside,
  Main,
  Icon,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
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
  InputNumber,
  TableColumn,
  Tabs,
  TabPane,
  Select,
  Option,

  Progress,
  Pagination,
  Divider,
  Alert,
  Tag,
  RadioGroup,
  Image,
  PageHeader,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem
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
