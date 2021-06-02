//Data Configuration which uses to for adding Form and Editing form
export const voucherConfig= {
    link:{
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'link',
            placeholder: 'Facebook Link'
        },
        value: '',
        validation:{
            required: true,
            format: '(?:(?:http|https):\\/\\/)?(?:www.)?facebook.com\\/(?:(?:\\w)*#!\\/)?(?:pages\\/)?(?:[?\\w\\-]*\\/)?(?:profile.php\\?id=(?=\\d.*))?([\\w\\-]*)?'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Link to Facebook'
    },
    image:{
        elementType: 'file',
        elementConfig:{
            type:'file',
            name: 'image',
            accept:'.jpg, .jpeg, .png'
        },
        validation:{
        required:false,
        },
        valid:true
    },
}
export const serviceConfig = {
    name: {
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'name',
            placeholder: 'Service Name'
        },
        value: '',
        validation:{
            required: true,
            format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Name'
    },
    english:{
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'english',
            placeholder: 'English Name'
        },
        value: '',
        validation:{
            required: true,
            format: '^(?![ .]+$)[a-zA-Z .]*$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid English Name'
    },
    type:{
        elementType: 'select',
        elementConfig:{
            options:[]
        },
        value: '',
        validation:{
            required: true,
        },
        valid: false,
        touched:false
    },
    des:{
        elementType: 'textarea',
        elementConfig:{
            type:'textarea',
            name: 'des',
            placeholder: 'Service Description',
            rows: 4,
            cols: 50,
        },
        value: '',
        validation:{
            required: true,
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Description'
    },
    time:{
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'time',
            placeholder: 'Service Duration'
        },
        value: '',
        validation:{
            required: true,
            format: '^[0-9]*$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Time'
    },
    price:{
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'price',
            placeholder: 'Service Price'
        },
        value: '',
        validation:{
            required: true,
            format: '^\\d+(,\\d{3})*(\\.\\d{1,2})?$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Price'
    },
    rank:{
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'rank',
            placeholder: 'Service Rank'
        },
        value: '',
        validation:{
            required: true,
            format: '^[0-9]*$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Rank'
    },
    image:{
        elementType: 'file',
        elementConfig:{
            type:'file',
            name: 'image',
            accept:'.jpg, .jpeg, .png, .gif'
        },
        validation:{
        required:false,
        },
        valid:true
    },
}
export const customerConfig = {
    name:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'name',
            placeholder: 'Customer Name'
        },
        value: '',
        validation:{
            required: true,
            format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Name'
    },
    phone:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'phone',
            placeholder: 'Phone Number'
        },
        value: '',
        validation:{
            required: true,
            format: '^[0-9]*$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Phone Number'
    },
    dob:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'dob',
            placeholder: 'Date of Birth',
        },
        value:'',
        validation:{
            required: true,
            format: '^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$'
        },
        valid: false,
        touched: false,
        errorMess: "Please input the valid Date of Birth"
    },
    email:{
        elementType: 'text',
        elementConfig:{
            type:'text',
            name: 'email',
            placeholder:'Customer Email'
        },
        value: '',
        validation:{
            required: true,
            format:'^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Email'
    },
    facebook:{
        elementType: 'text',
        elementConfig:{
            type:'text',
            name: 'facebook',
            placeholder:'Customer Facebook'
        },
        value: '',
        validation:{
            required: true,
            format: '(?:(?:http|https):\\/\\/)?(?:www.)?facebook.com\\/(?:(?:\\w)*#!\\/)?(?:pages\\/)?(?:[?\\w\\-]*\\/)?(?:profile.php\\?id=(?=\\d.*))?([\\w\\-]*)?'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Customer Facebook'
    },
    //them an = 0
    point:{
        elementType:'hidden',
        elementConfig:{
            type:'hidden',
            name:'point'
        },
        value:0,
        validation:{
            required:false,
        },
        valid:true,
    },
    blacklist:{
        elementType:'hidden',
        elementConfig:{
            type:'hidden',
            name:'blacklist'
        },
        value: false,
        validation:{
            required:false,
        },
        valid:true
    }
}
export const typeConfig = {
    id: {
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'name',
            placeholder: 'Type ID'
        },
        value: '',
        validation:{
            required: true,
            format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid ID'
    },
    name: {
        elementType: 'text',
        elementConfig: {
            type:'text',
            name: 'name',
            placeholder: 'Type Name'
        },
        value: '',
        validation:{
            required: true,
            format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
        },
        valid: false,
        touched:false,
        errorMess: 'Please input the valid Type Name'
    },
}
export const staffConfig = {
    name:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'name',
            placeholder: 'Staff Name'
        },
        value: '',
        validation:{
            required: true,
            format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Name'
    },
    phone:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'phone',
            placeholder: 'Phone Number'
        },
        value: '',
        validation:{
            required: true,
            format: '^[0-9]*$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Phone Number'
    },
    dob:{
        elementType: 'text',
        elementConfig:{
            type: 'text',
            name: 'dob',
            placeholder: 'Date of Birth',
        },
        value:'',
        validation:{
            required: true,
            format: '^([0-2][0-9]|(3)[0-1])(\\/)(((0)[0-9])|((1)[0-2]))(\\/)\\d{4}$'
        },
        valid: false,
        touched: false,
        errorMess: "Please input the valid Date of Birth"
    },
    email:{
        elementType: 'text',
        elementConfig:{
            type:'text',
            name: 'email',
            placeholder:'Staff Email'
        },
        value: '',
        validation:{
            required: true,
            format:'^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$'
        },
        valid: false,
        touched: false,
        errorMess: 'Please input the valid Email'
    },
    position:{
        elementType: 'text',
        elementConfig:{
            type:'text',
            name: 'position',
            placeholder:'Staff Position'
        },
        value:'',
        validation:{
            required:true,
            format: '^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s\\W|_]+$'
        },
        valid:false,
        touched:false,
        errorMess: 'Please input the valid Position'
    },
    rate:{
        elementType:'text',
        elementConfig:{
            type:'text',
            name:'commission rate',
            placeholder: 'Commission Rate',
        },
        value: '',
        validation:{
            required: true,
            format: '\\d+(?:\\.\\d+)?%'
        },
        valid: false,
        touched:false,
        errorMess: 'Commission Rate Format: X%'
    },
    salary:{
        elementType:'text',
        elementConfig:{
            type:'text',
            name:'Salary',
            placeholder: 'Salary'
        },
        value: '',
        validation:{
            required: true,
            format: '\\d+(?:\\.\\d+)?(?=VND\\b)'
        },
        valid: false,
        touched:false,
        errorMess: 'Salary must have VND'
    }
}