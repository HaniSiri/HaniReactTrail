import { IconProps } from '@/interfaces/app';


export const ErrorIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4001 7.0001C13.4001 10.5347 10.5347 13.4001 7.0001 13.4001C3.46548 13.4001 0.600098 10.5347 0.600098 7.0001C0.600098 3.46548 3.46548 0.600098 7.0001 0.600098C10.5347 0.600098 13.4001 3.46548 13.4001 7.0001ZM7.0001 3.0001C7.33147 3.0001 7.6001 3.26873 7.6001 3.6001V7.2001C7.6001 7.53147 7.33147 7.8001 7.0001 7.8001C6.66873 7.8001 6.4001 7.53147 6.4001 7.2001V3.6001C6.4001 3.26873 6.66873 3.0001 7.0001 3.0001ZM7.0001 11.0001C7.44192 11.0001 7.8001 10.6419 7.8001 10.2001C7.8001 9.75827 7.44192 9.4001 7.0001 9.4001C6.55827 9.4001 6.2001 9.75827 6.2001 10.2001C6.2001 10.6419 6.55827 11.0001 7.0001 11.0001Z" fill="#D00F32" />
    </svg>
);

export const CalendarIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width={`${props.width}`} height={`${props.height}`} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 1.625H15.625V1.25C15.625 0.951631 15.5065 0.665483 15.2955 0.454505C15.0845 0.243526 14.7984 0.125 14.5 0.125C14.2016 0.125 13.9155 0.243526 13.7045 0.454505C13.4935 0.665483 13.375 0.951631 13.375 1.25V1.625H6.625V1.25C6.625 0.951631 6.50647 0.665483 6.2955 0.454505C6.08452 0.243526 5.79837 0.125 5.5 0.125C5.20163 0.125 4.91548 0.243526 4.7045 0.454505C4.49353 0.665483 4.375 0.951631 4.375 1.25V1.625H2.5C2.00272 1.625 1.52581 1.82254 1.17417 2.17417C0.822544 2.52581 0.625 3.00272 0.625 3.5V18.5C0.625 18.9973 0.822544 19.4742 1.17417 19.8258C1.52581 20.1775 2.00272 20.375 2.5 20.375H17.5C17.9973 20.375 18.4742 20.1775 18.8258 19.8258C19.1775 19.4742 19.375 18.9973 19.375 18.5V3.5C19.375 3.00272 19.1775 2.52581 18.8258 2.17417C18.4742 1.82254 17.9973 1.625 17.5 1.625ZM4.375 3.875C4.375 4.17337 4.49353 4.45952 4.7045 4.6705C4.91548 4.88147 5.20163 5 5.5 5C5.79837 5 6.08452 4.88147 6.2955 4.6705C6.50647 4.45952 6.625 4.17337 6.625 3.875H13.375C13.375 4.17337 13.4935 4.45952 13.7045 4.6705C13.9155 4.88147 14.2016 5 14.5 5C14.7984 5 15.0845 4.88147 15.2955 4.6705C15.5065 4.45952 15.625 4.17337 15.625 3.875H17.125V6.125H2.875V3.875H4.375ZM2.875 18.125V8.375H17.125V18.125H2.875ZM8.5 10.625V15.875C8.5 16.1734 8.38147 16.4595 8.1705 16.6705C7.95952 16.8815 7.67337 17 7.375 17C7.07663 17 6.79048 16.8815 6.5795 16.6705C6.36853 16.4595 6.25 16.1734 6.25 15.875V12.4363C5.98232 12.5241 5.69141 12.5083 5.4348 12.392C5.17819 12.2757 4.97456 12.0674 4.86416 11.8082C4.75377 11.549 4.74464 11.2578 4.8386 10.9922C4.93255 10.7266 5.12274 10.5059 5.37156 10.3737L6.87156 9.62375C7.04272 9.5381 7.23289 9.49754 7.4241 9.50589C7.6153 9.51424 7.80122 9.57123 7.96425 9.67147C8.12729 9.77171 8.26205 9.91189 8.3558 10.0787C8.44955 10.2456 8.49918 10.4336 8.5 10.625ZM14.2647 13.8013L13.3656 14.75H13.75C14.0484 14.75 14.3345 14.8685 14.5455 15.0795C14.7565 15.2905 14.875 15.5766 14.875 15.875C14.875 16.1734 14.7565 16.4595 14.5455 16.6705C14.3345 16.8815 14.0484 17 13.75 17H10.75C10.5302 16.9999 10.3151 16.9354 10.1315 16.8145C9.94794 16.6936 9.80381 16.5215 9.71694 16.3195C9.63007 16.1176 9.60428 15.8946 9.64276 15.6781C9.68124 15.4617 9.78229 15.2612 9.93344 15.1016L12.5734 12.3125C12.6068 12.2556 12.6246 12.1909 12.625 12.125C12.6252 12.0423 12.5981 11.9618 12.5478 11.8961C12.4975 11.8304 12.4269 11.7832 12.347 11.7618C12.2671 11.7404 12.1823 11.746 12.1059 11.7778C12.0296 11.8096 11.9658 11.8657 11.9247 11.9375C11.7726 12.1901 11.5275 12.3729 11.242 12.4465C10.9566 12.5202 10.6536 12.4789 10.3983 12.3315C10.143 12.184 9.95576 11.9423 9.87689 11.6582C9.79802 11.3741 9.83381 11.0704 9.97656 10.8125C10.2655 10.312 10.7114 9.92083 11.2453 9.69966C11.7792 9.47848 12.3712 9.43966 12.9294 9.58923C13.4876 9.7388 13.9808 10.0684 14.3326 10.5269C14.6844 10.9854 14.875 11.5471 14.875 12.125C14.8767 12.6956 14.6909 13.2509 14.3463 13.7056C14.3211 13.7392 14.2939 13.7711 14.2647 13.8013Z" fill={props.fill} />
    </svg>
);

export const TimeIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width={`${props.width}`} height={`${props.height}`} viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.5 0.875C8.49747 0.875 6.5399 1.46882 4.87486 2.58137C3.20981 3.69392 1.91206 5.27523 1.14572 7.12533C0.379387 8.97543 0.178878 11.0112 0.569554 12.9753C0.960229 14.9393 1.92454 16.7435 3.34055 18.1595C4.75656 19.5755 6.56066 20.5398 8.52471 20.9305C10.4888 21.3211 12.5246 21.1206 14.3747 20.3543C16.2248 19.5879 17.8061 18.2902 18.9186 16.6251C20.0312 14.9601 20.625 13.0025 20.625 11C20.622 8.3156 19.5543 5.74199 17.6562 3.84383C15.758 1.94567 13.1844 0.877978 10.5 0.875ZM10.5 18.875C8.94248 18.875 7.41993 18.4131 6.12489 17.5478C4.82985 16.6825 3.82049 15.4526 3.22445 14.0136C2.62841 12.5747 2.47246 10.9913 2.77632 9.46366C3.08018 7.93606 3.8302 6.53287 4.93154 5.43153C6.03288 4.3302 7.43607 3.58017 8.96367 3.27632C10.4913 2.97246 12.0747 3.12841 13.5136 3.72445C14.9526 4.32049 16.1825 5.32985 17.0478 6.62488C17.9131 7.91992 18.375 9.44247 18.375 11C18.3728 13.0879 17.5424 15.0896 16.066 16.566C14.5896 18.0424 12.5879 18.8728 10.5 18.875ZM16.875 11C16.875 11.2984 16.7565 11.5845 16.5455 11.7955C16.3345 12.0065 16.0484 12.125 15.75 12.125H10.5C10.2016 12.125 9.91549 12.0065 9.70451 11.7955C9.49353 11.5845 9.375 11.2984 9.375 11V5.75C9.375 5.45163 9.49353 5.16548 9.70451 4.9545C9.91549 4.74353 10.2016 4.625 10.5 4.625C10.7984 4.625 11.0845 4.74353 11.2955 4.9545C11.5065 5.16548 11.625 5.45163 11.625 5.75V9.875H15.75C16.0484 9.875 16.3345 9.99353 16.5455 10.2045C16.7565 10.4155 16.875 10.7016 16.875 11Z" fill={props.fill} />
    </svg>
);

export const CrossIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width={`${props.width}`} height={`${props.height}`} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292894C10.6834 -0.0976306 11.3166 -0.0976306 11.7071 0.292894C12.0976 0.683418 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" fill={props.fill} />
    </svg>
);

export const DropdownIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width={`${props.width}`} height={`${props.height}`} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.25 2V8.5C13.25 8.83152 13.1183 9.14946 12.8839 9.38388C12.6495 9.6183 12.3315 9.75 12 9.75H6.0575C6.18473 9.89589 6.25063 10.0853 6.2414 10.2787C6.23218 10.472 6.14854 10.6544 6.008 10.7875C5.86746 10.9206 5.68089 10.9942 5.48731 10.9929C5.29374 10.9917 5.10815 10.9156 4.96938 10.7806L3.71938 9.53063C3.64946 9.46095 3.59398 9.37815 3.55612 9.28699C3.51827 9.19583 3.49878 9.09809 3.49878 8.99938C3.49878 8.90067 3.51827 8.80293 3.55612 8.71176C3.59398 8.6206 3.64946 8.5378 3.71938 8.46813L4.96938 7.21813C5.10744 7.07916 5.29439 6.99972 5.49026 6.99681C5.68613 6.99389 5.87537 7.06772 6.01751 7.20251C6.15965 7.33731 6.24341 7.52236 6.25088 7.71811C6.25836 7.91386 6.18895 8.10476 6.0575 8.25H11.75V2.25H5.25C5.25 2.44891 5.17098 2.63968 5.03033 2.78033C4.88968 2.92098 4.69891 3 4.5 3C4.30109 3 4.11032 2.92098 3.96967 2.78033C3.82902 2.63968 3.75 2.44891 3.75 2.25V2C3.75 1.66848 3.8817 1.35054 4.11612 1.11612C4.35054 0.881696 4.66848 0.75 5 0.75H12C12.3315 0.75 12.6495 0.881696 12.8839 1.11612C13.1183 1.35054 13.25 1.66848 13.25 2ZM9.5 11C9.30109 11 9.11032 11.079 8.96967 11.2197C8.82902 11.3603 8.75 11.5511 8.75 11.75H2.25V5.75H7.9425C7.81527 5.89589 7.74937 6.08533 7.7586 6.27869C7.76782 6.47205 7.85145 6.65435 7.992 6.78747C8.13254 6.92059 8.31911 6.99421 8.51269 6.99293C8.70626 6.99165 8.89185 6.91558 9.03063 6.78062L10.2806 5.53062C10.3505 5.46095 10.406 5.37815 10.4439 5.28699C10.4817 5.19583 10.5012 5.09809 10.5012 4.99937C10.5012 4.90066 10.4817 4.80292 10.4439 4.71176C10.406 4.6206 10.3505 4.5378 10.2806 4.46812L9.03063 3.21812C8.89256 3.07916 8.70561 2.99972 8.50974 2.99681C8.31387 2.99389 8.12463 3.06772 7.98249 3.20251C7.84035 3.33731 7.75659 3.52236 7.74912 3.71811C7.74164 3.91386 7.81105 4.10476 7.9425 4.25H2C1.66848 4.25 1.35054 4.3817 1.11612 4.61612C0.881696 4.85054 0.75 5.16848 0.75 5.5V12C0.75 12.3315 0.881696 12.6495 1.11612 12.8839C1.35054 13.1183 1.66848 13.25 2 13.25H9C9.33152 13.25 9.64946 13.1183 9.88388 12.8839C10.1183 12.6495 10.25 12.3315 10.25 12V11.75C10.25 11.5511 10.171 11.3603 10.0303 11.2197C9.88968 11.079 9.69891 11 9.5 11Z" fill={props.fill} />
    </svg>
);

export const TickIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 7.99972L5.52347 12.5232C7.25804 8.43028 9.82017 4.77317 13 1.76172" stroke="#4112FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const EditIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.3103 4.87915L14.1216 0.689461C13.9823 0.550137 13.8169 0.439617 13.6349 0.364213C13.4529 0.28881 13.2578 0.25 13.0608 0.25C12.8638 0.25 12.6687 0.28881 12.4867 0.364213C12.3047 0.439617 12.1393 0.550137 12 0.689461L0.439695 12.2507C0.299801 12.3895 0.188889 12.5547 0.113407 12.7367C0.0379245 12.9188 -0.000621974 13.114 7.58902e-06 13.311V17.5007C7.58902e-06 17.8985 0.158043 18.2801 0.439347 18.5614C0.720652 18.8427 1.10218 19.0007 1.50001 19.0007H5.68969C5.88675 19.0013 6.08197 18.9628 6.26399 18.8873C6.44602 18.8118 6.61122 18.7009 6.75001 18.561L18.3103 7.00071C18.4496 6.86142 18.5602 6.69604 18.6356 6.51403C18.711 6.33202 18.7498 6.13694 18.7498 5.93993C18.7498 5.74292 18.711 5.54784 18.6356 5.36582C18.5602 5.18381 18.4496 5.01844 18.3103 4.87915ZM15 8.18946L10.8103 4.00071L13.0603 1.75071L17.25 5.93946L15 8.18946Z" fill="#7F8FA8" />
    </svg>
);

export const ArrowIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.0427 12.7959L14.2927 19.5459C14.0814 19.7572 13.7947 19.8759 13.4958 19.8759C13.197 19.8759 12.9103 19.7572 12.699 19.5459C12.4876 19.3345 12.3689 19.0479 12.3689 18.749C12.3689 18.4501 12.4876 18.1635 12.699 17.9521L17.528 13.1249L3.74677 13.1249C3.4484 13.1249 3.16226 13.0064 2.95128 12.7954C2.7403 12.5844 2.62177 12.2983 2.62177 11.9999C2.62177 11.7016 2.7403 11.4154 2.95128 11.2044C3.16226 10.9934 3.4484 10.8749 3.74677 10.8749L17.528 10.8749L12.7008 6.04492C12.4895 5.83358 12.3708 5.54693 12.3708 5.24804C12.3708 4.94916 12.4895 4.66251 12.7008 4.45117C12.9122 4.23983 13.1988 4.12109 13.4977 4.12109C13.7966 4.12109 14.0832 4.23983 14.2946 4.45117L21.0446 11.2012C21.1495 11.3058 21.2327 11.4302 21.2894 11.5671C21.3461 11.704 21.3752 11.8507 21.375 11.9989C21.3748 12.1471 21.3454 12.2938 21.2884 12.4305C21.2313 12.5673 21.1479 12.6914 21.0427 12.7959Z" fill="#7F8FA8" />
    </svg>
);

export const SearchIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5305 12.4693L10.5624 9.49991C11.4524 8.34021 11.8678 6.88541 11.7246 5.43063C11.5814 3.97585 10.8901 2.63002 9.79107 1.66616C8.69203 0.702295 7.26751 0.192572 5.80648 0.240389C4.34544 0.288205 2.9573 0.88998 1.92364 1.92364C0.88998 2.9573 0.288205 4.34544 0.240389 5.80648C0.192572 7.26751 0.702295 8.69203 1.66616 9.79107C2.63002 10.8901 3.97585 11.5814 5.43063 11.7246C6.88541 11.8678 8.34021 11.4524 9.49991 10.5624L12.4705 13.5337C12.5403 13.6034 12.6231 13.6588 12.7143 13.6965C12.8054 13.7343 12.9031 13.7537 13.0018 13.7537C13.1005 13.7537 13.1981 13.7343 13.2893 13.6965C13.3805 13.6588 13.4633 13.6034 13.533 13.5337C13.6028 13.4639 13.6581 13.3811 13.6959 13.2899C13.7337 13.1988 13.7531 13.1011 13.7531 13.0024C13.7531 12.9038 13.7337 12.8061 13.6959 12.7149C13.6581 12.6238 13.6028 12.5409 13.533 12.4712L13.5305 12.4693ZM1.74991 5.99991C1.74991 5.15934 1.99917 4.33765 2.46617 3.63874C2.93316 2.93983 3.59692 2.3951 4.37351 2.07343C5.1501 1.75175 6.00463 1.66759 6.82905 1.83158C7.65347 1.99556 8.41075 2.40034 9.00512 2.99471C9.59949 3.58908 10.0043 4.34636 10.1683 5.17078C10.3322 5.9952 10.2481 6.84973 9.9264 7.62632C9.60473 8.40291 9.06 9.06666 8.36109 9.53366C7.66218 10.0007 6.84049 10.2499 5.99991 10.2499C4.8731 10.2488 3.79277 9.80062 2.99599 9.00384C2.19921 8.20706 1.75107 7.12673 1.74991 5.99991Z" fill="#7F8FA8" />
    </svg>
);

export const VisibleIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width="16" height="11" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.6873 5.69562C15.6641 5.645 15.1166 4.42937 13.9073 3.22C12.2891 1.60437 10.2498 0.75 7.99976 0.75C5.74976 0.75 3.71038 1.60437 2.09413 3.22C0.884757 4.42937 0.337257 5.645 0.312257 5.69562C0.269915 5.79162 0.248047 5.89539 0.248047 6.00031C0.248047 6.10523 0.269915 6.209 0.312257 6.305C0.335382 6.35625 0.882882 7.57125 2.09288 8.78063C3.71038 10.3963 5.74976 11.25 7.99976 11.25C10.2498 11.25 12.2891 10.3963 13.9048 8.78063C15.1148 7.57125 15.6623 6.35625 15.6854 6.305C15.728 6.20913 15.7502 6.10543 15.7505 6.00051C15.7509 5.89559 15.7293 5.79175 15.6873 5.69562ZM12.8085 7.75813C11.4666 9.07938 9.84913 9.75 7.99976 9.75C6.15038 9.75 4.53288 9.07937 3.19288 7.7575C2.6656 7.23577 2.21203 6.64447 1.84476 6C2.21214 5.35579 2.6657 4.76471 3.19288 4.24312C4.53351 2.92062 6.15038 2.25 7.99976 2.25C9.84913 2.25 11.466 2.92062 12.8066 4.24312C13.3339 4.76467 13.7874 5.35575 14.1548 6C13.7874 6.64443 13.3339 7.23572 12.8066 7.7575L12.8085 7.75813ZM7.99976 3.25C7.45586 3.25 6.92417 3.41128 6.47194 3.71346C6.0197 4.01563 5.66723 4.44512 5.45909 4.94762C5.25095 5.45012 5.19649 6.00305 5.3026 6.5365C5.40871 7.06995 5.67062 7.55995 6.05521 7.94454C6.43981 8.32914 6.92981 8.59105 7.46326 8.69716C7.99671 8.80327 8.54964 8.74881 9.05214 8.54067C9.55463 8.33253 9.98412 7.98005 10.2863 7.52782C10.5885 7.07558 10.7498 6.5439 10.7498 6C10.7489 5.27091 10.4589 4.57192 9.94339 4.05637C9.42784 3.54082 8.72885 3.25083 7.99976 3.25ZM7.99976 7.25C7.75253 7.25 7.51086 7.17669 7.30529 7.03934C7.09973 6.90199 6.93952 6.70676 6.84491 6.47835C6.7503 6.24995 6.72554 5.99861 6.77378 5.75614C6.82201 5.51366 6.94106 5.29093 7.11587 5.11612C7.29069 4.9413 7.51342 4.82225 7.75589 4.77402C7.99837 4.72579 8.2497 4.75054 8.47811 4.84515C8.70652 4.93976 8.90174 5.09998 9.03909 5.30554C9.17645 5.5111 9.24976 5.75277 9.24976 6C9.24976 6.33152 9.11806 6.64946 8.88364 6.88388C8.64922 7.1183 8.33128 7.25 7.99976 7.25Z" fill={props.fill} />
    </svg>
);

export const NotVisibleIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.55476 0.995444C3.48889 0.9212 3.40895 0.860767 3.31956 0.817647C3.23017 0.774527 3.1331 0.749579 3.034 0.744247C2.93489 0.738915 2.83572 0.753307 2.74222 0.786587C2.64871 0.819868 2.56275 0.871375 2.4893 0.938124C2.41585 1.00487 2.35638 1.08554 2.31433 1.17544C2.27229 1.26534 2.24851 1.36269 2.24436 1.46186C2.24022 1.56102 2.2558 1.66002 2.2902 1.75311C2.3246 1.84621 2.37713 1.93155 2.44476 2.00419L3.44476 3.10732C1.29163 4.54107 0.357257 6.59857 0.312257 6.69544C0.269915 6.79144 0.248047 6.89521 0.248047 7.00013C0.248047 7.10505 0.269915 7.20882 0.312257 7.30482C0.335382 7.35607 0.882882 8.57107 2.09288 9.78044C3.71038 11.3961 5.74976 12.2498 7.99976 12.2498C9.09328 12.2559 10.177 12.0434 11.1873 11.6248L12.4429 13.0061C12.5774 13.1505 12.7633 13.2361 12.9605 13.2444C13.1577 13.2526 13.3502 13.1828 13.4962 13.0501C13.6423 12.9173 13.7301 12.7324 13.7408 12.5353C13.7514 12.3383 13.6839 12.145 13.5529 11.9973L3.55476 0.995444ZM7.99976 10.7498C6.15038 10.7498 4.53288 10.0792 3.19288 8.75732C2.66579 8.23542 2.21225 7.64415 1.84476 6.99982C2.17413 6.41794 3.01913 5.13107 4.46976 4.23169L10.1004 10.4261C9.42135 10.6429 8.71257 10.7521 7.99976 10.7498ZM15.6873 7.30482C15.6648 7.35544 15.1248 8.55482 13.9373 9.75232C13.8693 9.8278 13.7866 9.88868 13.6944 9.93126C13.6022 9.97384 13.5022 9.99724 13.4007 10C13.2991 10.0028 13.1981 9.98497 13.1036 9.94753C13.0092 9.91008 12.9233 9.85384 12.8513 9.78222C12.7792 9.71059 12.7225 9.62507 12.6845 9.53085C12.6465 9.43663 12.628 9.33568 12.6302 9.23411C12.6324 9.13254 12.6552 9.03247 12.6973 8.93998C12.7393 8.8475 12.7997 8.76451 12.8748 8.69607C13.3736 8.1889 13.8039 7.61864 14.1548 6.99982C13.7875 6.35535 13.3339 5.76405 12.8066 5.24232C11.466 3.92044 9.84913 3.24982 7.99976 3.24982C7.79038 3.24982 7.58101 3.25857 7.37476 3.27607C7.27537 3.28672 7.17485 3.27739 7.07911 3.24863C6.98338 3.21988 6.89436 3.17228 6.81728 3.10862C6.74021 3.04497 6.67664 2.96655 6.6303 2.87798C6.58397 2.78941 6.55581 2.69247 6.54748 2.59285C6.53914 2.49324 6.55081 2.39297 6.58178 2.29793C6.61276 2.20289 6.66242 2.115 6.72785 2.03943C6.79328 1.96385 6.87315 1.90212 6.96278 1.85786C7.05241 1.8136 7.14998 1.78771 7.24976 1.78169C7.49538 1.76044 7.74976 1.74982 7.99976 1.74982C10.2498 1.74982 12.2891 2.60419 13.9054 4.21982C15.1148 5.42919 15.6623 6.64482 15.6854 6.69544C15.728 6.79131 15.7502 6.89501 15.7505 6.99993C15.7509 7.10486 15.7293 7.20869 15.6873 7.30482Z" fill="#7F8FA8" />
    </svg>
);

export const OrderIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width="13" height="9" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.75 1C0.75 0.801088 0.829018 0.610322 0.96967 0.46967C1.11032 0.329018 1.30109 0.25 1.5 0.25H12.5C12.6989 0.25 12.8897 0.329018 13.0303 0.46967C13.171 0.610322 13.25 0.801088 13.25 1C13.25 1.19891 13.171 1.38968 13.0303 1.53033C12.8897 1.67098 12.6989 1.75 12.5 1.75H1.5C1.30109 1.75 1.11032 1.67098 0.96967 1.53033C0.829018 1.38968 0.75 1.19891 0.75 1ZM12.5 2.75H1.5C1.30109 2.75 1.11032 2.82902 0.96967 2.96967C0.829018 3.11032 0.75 3.30109 0.75 3.5C0.75 3.69891 0.829018 3.88968 0.96967 4.03033C1.11032 4.17098 1.30109 4.25 1.5 4.25H12.5C12.6989 4.25 12.8897 4.17098 13.0303 4.03033C13.171 3.88968 13.25 3.69891 13.25 3.5C13.25 3.30109 13.171 3.11032 13.0303 2.96967C12.8897 2.82902 12.6989 2.75 12.5 2.75ZM12.5 5.25H1.5C1.30109 5.25 1.11032 5.32902 0.96967 5.46967C0.829018 5.61032 0.75 5.80109 0.75 6C0.75 6.19891 0.829018 6.38968 0.96967 6.53033C1.11032 6.67098 1.30109 6.75 1.5 6.75H12.5C12.6989 6.75 12.8897 6.67098 13.0303 6.53033C13.171 6.38968 13.25 6.19891 13.25 6C13.25 5.80109 13.171 5.61032 13.0303 5.46967C12.8897 5.32902 12.6989 5.25 12.5 5.25ZM12.5 7.75H1.5C1.30109 7.75 1.11032 7.82902 0.96967 7.96967C0.829018 8.11032 0.75 8.30109 0.75 8.5C0.75 8.69891 0.829018 8.88968 0.96967 9.03033C1.11032 9.17098 1.30109 9.25 1.5 9.25H12.5C12.6989 9.25 12.8897 9.17098 13.0303 9.03033C13.171 8.88968 13.25 8.69891 13.25 8.5C13.25 8.30109 13.171 8.11032 13.0303 7.96967C12.8897 7.82902 12.6989 7.75 12.5 7.75Z" fill={props.fill} />
    </svg>
);

export const SuccessTickIconComponent: React.FC<IconProps> = (props: IconProps) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7261 1.0741C14.1058 1.4751 14.0886 2.10803 13.6876 2.48779C10.6063 5.40591 8.12425 8.94914 6.4442 12.9134C6.31445 13.2196 6.04098 13.4412 5.71457 13.5048C5.38815 13.5683 5.05151 13.4654 4.81637 13.2303L0.292893 8.70683C-0.0976311 8.31631 -0.0976311 7.68314 0.292893 7.29262C0.683417 6.90209 1.31658 6.90209 1.70711 7.29262L5.20673 10.7922C6.96514 7.11124 9.38516 3.80787 12.3124 1.03565C12.7134 0.655889 13.3463 0.673102 13.7261 1.0741Z" fill="#0E875C" />
    </svg>
);