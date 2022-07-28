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
  InputNumber
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
const components = [
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
  Image,
  Input,
  FormItem,
  InputNumber
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
