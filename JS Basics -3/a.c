#include <stdio.h>
#include<stdlib.h>
struct node
{
    int data;
    struct node*next;
};
struct node *head= NULL;
void insert (int d)
{
    struct node *curr,*tail;
    for(int i=0;i<d;i++)
    {
        curr=malloc(sizeof(struct node));
        printf("Insert data in %d node\n",(i+1));
        scanf("%d",&(curr->data));
        curr->next= NULL;
        if(head==NULL)
        {
            head=tail=curr;
        }
        else
        {
            tail->next=curr; // Null current hunxa 
            tail=curr;
        }
    }
}
void display (struct node *head)
{
    struct node *ptr=head;
    for(;ptr!=NULL; ptr=ptr->next)
    {
        printf("The data in the nodes are: ");
        printf("%d\n",ptr->data);
    }
}
void check_empty(struct node *head)
{
    struct node *ptr=head;
    if (ptr==NULL)
        printf("The list is empty");
    else
        printf("The list is not empty");
}
void find(struct node *head)
{
    int a;
    printf("\nenter the data you want to search");
    scanf("%d",&a);
     struct node *ptr=head;
    for(;ptr!=NULL; ptr=ptr->next)
    {
        if(ptr->data==a)
        {
            printf("Found");
            return;       // Vettayo element vane yehi bata function siddinxa tala jadai janna
        }
    }
    printf("\nNot Found\n");
    return;
}
struct node * in_b(struct node *head)
{
    struct node *curr;
    curr=malloc(sizeof(struct node));
    printf("Insert data in the begining");
    scanf("%d",&(curr->data));
    curr->next= head;
    head=curr;
    return head;
}
struct node * in_l(struct node *head)
{
    struct node *curr;
    curr=malloc(sizeof(struct node));
    printf("Insert data in the end");
    scanf("%d",&(curr->data));
    struct node *ptr=head;
    for(;ptr->next!=NULL;ptr=ptr->next);
    ptr->next=curr; 
    return head;
}
int main()
{
    int no;
    printf("Number of nodes:\n");
    scanf("%d",&no);
    insert(no);
    display(head);
    // check_empty(head);
    // find(head);
    head = in_b(head);
    head = in_l(head);
    display(head);
    return 0;
} 