CREATE TABLE [dbo].[SubCategories] (
    [Id]   INT          IDENTITY (1, 1) NOT NULL,
    [SubCategoryName] VARCHAR (50) NULL,
    [CategoryId]      INT          NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_SubCategory_Category] FOREIGN KEY ([CategoryId]) REFERENCES [dbo].[Categories] ([Id])
);


