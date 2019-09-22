"""empty message

Revision ID: 6476064cf0dc
Revises: 
Create Date: 2019-09-22 02:50:18.051935

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6476064cf0dc'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('movies',
    sa.Column('movie_title', sa.String(length=128), nullable=False),
    sa.Column('director_name', sa.String(length=128), nullable=True),
    sa.Column('genres', sa.String(length=128), nullable=True),
    sa.Column('plot_keywords', sa.String(length=256), nullable=True),
    sa.Column('movie_imdb_link', sa.String(length=256), nullable=True),
    sa.Column('language', sa.String(length=256), nullable=True),
    sa.Column('country', sa.String(length=256), nullable=True),
    sa.Column('title_year', sa.String(length=256), nullable=True),
    sa.Column('imdb_score', sa.Float(), nullable=True),
    sa.PrimaryKeyConstraint('movie_title')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('movies')
    # ### end Alembic commands ###
